package com.cdmx.apicore.sat.validation.impl;

import com.cdmx.apicore.sat.dto.InvoiceRequestDto;
import com.cdmx.apicore.sat.exception.SatValidationException;
import com.cdmx.apicore.sat.validation.SatValidationRule;

import java.util.Set;

public class TaxRegimeValidationRule implements SatValidationRule {

    // Simplified for demonstration. Real implementation would check SAT catalogs.
    private static final Set<String> REGIMENES_PERSONA_MORAL = Set.of("601", "603", "626");
    private static final Set<String> REGIMENES_PERSONA_FISICA = Set.of("605", "606", "612", "626");

    @Override
    public void validate(InvoiceRequestDto request) throws SatValidationException {
        String rfc = request.getEmisorRfc();
        String regimen = request.getEmisorRegimenFiscal();

        if (rfc == null || regimen == null) {
            return; // Handled by @NotBlank annotations
        }

        boolean isPersonaMoral = rfc.length() == 12;
        boolean isPersonaFisica = rfc.length() == 13;

        if (isPersonaMoral && !REGIMENES_PERSONA_MORAL.contains(regimen)) {
            throw new SatValidationException("Tax regime " + regimen + " is not valid for Persona Moral (RFC: " + rfc + ")");
        }
        
        if (isPersonaFisica && !REGIMENES_PERSONA_FISICA.contains(regimen)) {
            throw new SatValidationException("Tax regime " + regimen + " is not valid for Persona Física (RFC: " + rfc + ")");
        }
    }
}
