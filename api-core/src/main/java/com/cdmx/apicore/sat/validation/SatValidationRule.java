package com.cdmx.apicore.sat.validation;

import com.cdmx.apicore.sat.dto.InvoiceRequestDto;
import com.cdmx.apicore.sat.exception.SatValidationException;

/**
 * Represents a single validation rule for SAT compliance.
 */
public interface SatValidationRule {
    /**
     * Validates the request. Throws SatValidationException if validation fails.
     */
    void validate(InvoiceRequestDto request) throws SatValidationException;
}
