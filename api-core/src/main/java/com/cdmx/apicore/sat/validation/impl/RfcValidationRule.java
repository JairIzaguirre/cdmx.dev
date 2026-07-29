package com.cdmx.apicore.sat.validation.impl;

import com.cdmx.apicore.sat.dto.InvoiceRequestDto;
import com.cdmx.apicore.sat.exception.SatValidationException;
import com.cdmx.apicore.sat.validation.SatValidationRule;

public class RfcValidationRule implements SatValidationRule {
    @Override
    public void validate(InvoiceRequestDto request) throws SatValidationException {
        if (request.getEmisorRfc() == null || request.getEmisorRfc().trim().isEmpty()) {
            throw new SatValidationException("Emisor RFC cannot be null or empty");
        }
        if (request.getReceptorRfc() == null || request.getReceptorRfc().trim().isEmpty()) {
            throw new SatValidationException("Receptor RFC cannot be null or empty");
        }
        
        // Note: Regex validation is also handled by @Pattern in the DTO, 
        // but kept here for programmatic validation pipeline demonstration.
        String rfcPattern = "^[A-Z&Ñ]{3,4}\\d{6}[A-Z0-9]{3}$";
        if (!request.getEmisorRfc().matches(rfcPattern)) {
            throw new SatValidationException("Invalid Emisor RFC format: " + request.getEmisorRfc());
        }
        if (!request.getReceptorRfc().matches(rfcPattern)) {
            throw new SatValidationException("Invalid Receptor RFC format: " + request.getReceptorRfc());
        }
    }
}
