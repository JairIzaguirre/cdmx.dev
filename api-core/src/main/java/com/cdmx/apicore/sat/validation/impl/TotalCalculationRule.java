package com.cdmx.apicore.sat.validation.impl;

import com.cdmx.apicore.sat.dto.InvoiceRequestDto;
import com.cdmx.apicore.sat.exception.SatValidationException;
import com.cdmx.apicore.sat.validation.SatValidationRule;

import java.math.BigDecimal;
import java.util.List;

public class TotalCalculationRule implements SatValidationRule {

    @Override
    public void validate(InvoiceRequestDto request) throws SatValidationException {
        List<InvoiceRequestDto.ConceptoDto> conceptos = request.getConceptos();
        
        if (conceptos == null || conceptos.isEmpty()) {
            return; // Handled by @NotEmpty
        }

        BigDecimal calculatedSubtotal = BigDecimal.ZERO;
        
        for (InvoiceRequestDto.ConceptoDto concepto : conceptos) {
            if (concepto.getCantidad() != null && concepto.getValorUnitario() != null) {
                BigDecimal importe = concepto.getCantidad().multiply(concepto.getValorUnitario());
                calculatedSubtotal = calculatedSubtotal.add(importe);
            }
        }
        
        if (calculatedSubtotal.compareTo(BigDecimal.ZERO) <= 0) {
            throw new SatValidationException("The calculated subtotal must be greater than zero.");
        }
        
        // In a real implementation, we would validate that calculatedSubtotal + taxes == request.getTotal()
        // but since InvoiceRequestDto is lightweight, we might actually use this rule to ENRICH the DTO 
        // with the calculated totals if we add those fields, or just ensure math is valid.
    }
}
