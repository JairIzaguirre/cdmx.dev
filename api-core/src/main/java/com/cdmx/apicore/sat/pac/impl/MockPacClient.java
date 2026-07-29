package com.cdmx.apicore.sat.pac.impl;

import com.cdmx.apicore.sat.pac.PacClient;
import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * A mock PAC client for the Instant Sandbox Environment.
 * It simulates stamping by appending a fake Timbre Fiscal Digital to the XML.
 */
@Service
public class MockPacClient implements PacClient {

    @Override
    public String stamp(String signedXml) {
        // In a real scenario, this would parse the XML, inject the TimbreFiscalDigital node inside Complemento, and return.
        // For the deep-dive MVP, we just append a mock UUID string to prove the pipeline works.
        
        String fakeUuid = UUID.randomUUID().toString().toUpperCase();
        String fakeTimbre = String.format("\n<!-- MOCK TIMBRE FISCAL DIGITAL: %s -->\n", fakeUuid);
        
        return signedXml.replace("</cfdi:Comprobante>", fakeTimbre + "</cfdi:Comprobante>");
    }
}
