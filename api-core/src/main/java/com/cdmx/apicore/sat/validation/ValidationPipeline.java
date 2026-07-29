package com.cdmx.apicore.sat.validation;

import com.cdmx.apicore.sat.dto.InvoiceRequestDto;
import com.cdmx.apicore.sat.exception.SatValidationException;

import java.util.ArrayList;
import java.util.List;

/**
 * Pipeline to execute all registered SAT validation rules sequentially.
 */
public class ValidationPipeline {
    private final List<SatValidationRule> rules = new ArrayList<>();

    public ValidationPipeline addRule(SatValidationRule rule) {
        this.rules.add(rule);
        return this;
    }

    public void validateAll(InvoiceRequestDto request) throws SatValidationException {
        for (SatValidationRule rule : rules) {
            rule.validate(request);
        }
    }
}
