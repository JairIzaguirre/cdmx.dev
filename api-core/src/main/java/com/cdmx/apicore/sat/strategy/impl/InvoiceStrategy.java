package com.cdmx.apicore.sat.strategy.impl;

import com.cdmx.apicore.sat.builder.CfdiXmlBuilder;
import com.cdmx.apicore.sat.domain.cfdi40.Comprobante;
import com.cdmx.apicore.sat.dto.InvoiceRequestDto;
import com.cdmx.apicore.sat.mapper.CfdiRequestMapper;
import com.cdmx.apicore.sat.strategy.CfdiGenerationStrategy;

public class InvoiceStrategy implements CfdiGenerationStrategy {

    private final CfdiRequestMapper mapper;

    public InvoiceStrategy() {
        this.mapper = new CfdiRequestMapper();
    }

    @Override
    public boolean supports(String documentType) {
        return "I".equalsIgnoreCase(documentType); // Ingreso
    }

    @Override
    public String generateXml(InvoiceRequestDto request) {
        // 1. Map simple DTO to complex domain model
        Comprobante comprobante = mapper.mapToDomainModel(request);

        // 2. Delegate XML construction to JAXB
        CfdiXmlBuilder builder = new CfdiXmlBuilder(comprobante);

        return builder.build();
    }
}
