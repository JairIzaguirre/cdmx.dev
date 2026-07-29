package com.cdmx.apicore.sat.pac;

/**
 * Interface representing a Proveedor Autorizado de Certificación (PAC).
 * Responsible for receiving a signed XML (with Sello) and returning the stamped XML (with Timbre Fiscal Digital).
 */
public interface PacClient {
    
    /**
     * Sends the signed XML to the PAC for stamping.
     * @param signedXml The CFDI XML signed by the Emisor.
     * @return The final XML string containing the Timbre Fiscal Digital (UUID).
     */
    String stamp(String signedXml);
}
