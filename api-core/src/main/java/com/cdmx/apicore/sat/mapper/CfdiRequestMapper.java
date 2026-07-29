package com.cdmx.apicore.sat.mapper;

import com.cdmx.apicore.sat.domain.cfdi40.Comprobante;
import com.cdmx.apicore.sat.domain.cfdi40.Comprobante.Conceptos;
import com.cdmx.apicore.sat.domain.cfdi40.Comprobante.Conceptos.Concepto;
import com.cdmx.apicore.sat.domain.cfdi40.Comprobante.Emisor;
import com.cdmx.apicore.sat.domain.cfdi40.Comprobante.Receptor;
import com.cdmx.apicore.sat.domain.cfdi40.CMetodoPago;
import com.cdmx.apicore.sat.domain.cfdi40.CMoneda;
import com.cdmx.apicore.sat.domain.cfdi40.CTipoDeComprobante;
import com.cdmx.apicore.sat.domain.cfdi40.CUsoCFDI;
import com.cdmx.apicore.sat.dto.InvoiceRequestDto;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

/**
 * Maps the lightweight JSON DTO to the complex internal JAXB domain model.
 */
@Component
public class CfdiRequestMapper {
    
    public Comprobante mapToDomainModel(InvoiceRequestDto requestDto) {
        Comprobante comprobante = new Comprobante();
        
        comprobante.setVersion("4.0");
        comprobante.setTipoDeComprobante(CTipoDeComprobante.fromValue(requestDto.getTipoDeComprobante()));
        comprobante.setFormaPago(requestDto.getFormaPago());
        comprobante.setMetodoPago(CMetodoPago.fromValue(requestDto.getMetodoPago()));
        comprobante.setMoneda(CMoneda.fromValue("MXN"));
        comprobante.setLugarExpedicion(requestDto.getEmisorCodigoPostal());
        
        // Emisor
        Emisor emisor = new Emisor();
        emisor.setRfc(requestDto.getEmisorRfc());
        emisor.setNombre(requestDto.getEmisorNombre());
        emisor.setRegimenFiscal(requestDto.getEmisorRegimenFiscal());
        comprobante.setEmisor(emisor);

        // Receptor
        Receptor receptor = new Receptor();
        receptor.setRfc(requestDto.getReceptorRfc());
        receptor.setNombre(requestDto.getReceptorNombre());
        receptor.setDomicilioFiscalReceptor(requestDto.getReceptorCodigoPostal());
        receptor.setRegimenFiscalReceptor(requestDto.getReceptorRegimenFiscal());
        receptor.setUsoCFDI(CUsoCFDI.fromValue(requestDto.getUsoCfdi()));
        comprobante.setReceptor(receptor);

        // Conceptos & Totals calculation
        Conceptos conceptos = new Conceptos();
        BigDecimal subTotal = BigDecimal.ZERO;
        
        for (InvoiceRequestDto.ConceptoDto dto : requestDto.getConceptos()) {
            Concepto concepto = new Concepto();
            concepto.setClaveProdServ(dto.getClaveProdServ());
            concepto.setCantidad(dto.getCantidad());
            concepto.setClaveUnidad(dto.getClaveUnidad());
            concepto.setDescripcion(dto.getDescripcion());
            concepto.setValorUnitario(dto.getValorUnitario());
            
            BigDecimal importe = dto.getCantidad().multiply(dto.getValorUnitario());
            concepto.setImporte(importe);
            subTotal = subTotal.add(importe);
            
            // Taxes calculation would normally be added here
            
            conceptos.getConcepto().add(concepto);
        }
        
        comprobante.setConceptos(conceptos);
        comprobante.setSubTotal(subTotal);
        comprobante.setTotal(subTotal); // Assuming 0 taxes for now, real engine will calculate it
        
        return comprobante;
    }
}
