package com.cdmx.apicore.sat.strategy;

import com.cdmx.apicore.sat.dto.InvoiceRequestDto;

/**
 * Strategy interface for generating CFDI XML based on document type (Ingreso, Egreso, etc.)
 */
public interface CfdiGenerationStrategy {
    
    /**
     * Identifies if this strategy supports the given document type.
     */
    boolean supports(String documentType);
    
    /**
     * Generates the XML representation for the given request.
     */
    String generateXml(InvoiceRequestDto request);
}
