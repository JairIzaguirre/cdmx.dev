package com.cdmx.apicore.sat.facade;

import com.cdmx.apicore.sat.dto.InvoiceRequestDto;
import com.cdmx.apicore.sat.exception.SatValidationException;
import com.cdmx.apicore.sat.strategy.CfdiGenerationStrategy;
import com.cdmx.apicore.sat.strategy.impl.InvoiceStrategy;
import com.cdmx.apicore.sat.validation.ValidationPipeline;
import com.cdmx.apicore.sat.validation.impl.RfcValidationRule;
import com.cdmx.apicore.sat.validation.impl.TaxRegimeValidationRule;
import com.cdmx.apicore.sat.validation.impl.TotalCalculationRule;
import com.cdmx.apicore.sat.crypto.SelloGenerator;
import com.cdmx.apicore.sat.pac.PacClient;
import com.cdmx.apicore.sat.pac.impl.MockPacClient;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Facade pattern to act as the main entry point for the REST controllers.
 * It hides the complex orchestration of validation, strategy selection, mapping, and XML generation.
 */
@Service
public class SatEngineFacade {

    private final ValidationPipeline validationPipeline;
    private final List<CfdiGenerationStrategy> strategies;
    private final SelloGenerator selloGenerator;
    private final PacClient pacClient;

    public SatEngineFacade() {
        // In a Spring application, these would be injected via @Autowired
        this.validationPipeline = new ValidationPipeline()
                .addRule(new RfcValidationRule())
                .addRule(new TaxRegimeValidationRule())
                .addRule(new TotalCalculationRule());
        
        this.strategies = new ArrayList<>();
        this.strategies.add(new InvoiceStrategy());
        
        this.selloGenerator = new SelloGenerator();
        this.pacClient = new MockPacClient();
    }

    /**
     * Processes a lightweight JSON request and returns the signed CFDI XML string.
     */
    public String processRequest(InvoiceRequestDto request) {
        
        // 1. Run rigorous validations
        validationPipeline.validateAll(request);

        // 2. Find the correct generation strategy
        CfdiGenerationStrategy activeStrategy = strategies.stream()
                .filter(strategy -> strategy.supports(request.getTipoDeComprobante()))
                .findFirst()
                .orElseThrow(() -> new SatValidationException("Unsupported document type: " + request.getTipoDeComprobante()));

        // 3. Generate the XML using the specific strategy
        String rawXml = activeStrategy.generateXml(request);
        
        // 4. Sign the XML via Sello Digital
        String signedXml = signXml(rawXml);

        // 5. Stamp via PAC
        return pacClient.stamp(signedXml);
    }
    
    private String signXml(String rawXml) {
        // In reality, you would retrieve the Emisor's .key bytes from the CSD Vault.
        // For the deep dive, we'll assume a dummy byte array or just return it if key is missing.
        // String cadena = selloGenerator.generateCadenaOriginal(rawXml);
        // String sello = selloGenerator.generateSello(cadena, dummyKeyBytes);
        // Then you'd inject the sello into the XML attribute `Sello="..."`
        
        // Simulating the signature injection
        return rawXml.replace("<cfdi:Comprobante ", "<cfdi:Comprobante Sello=\"MOCK_SELLO_BASE64\" ");
    }
}
