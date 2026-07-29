package com.cdmx.apicore.sat.builder;

import com.cdmx.apicore.sat.domain.cfdi40.Comprobante;
import com.cdmx.apicore.sat.exception.SatValidationException;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Marshaller;

import java.io.StringWriter;

/**
 * Utility to marshal JAXB domain objects into CFDI XML strings.
 */
public class CfdiXmlBuilder {

    private final Comprobante comprobante;

    public CfdiXmlBuilder(Comprobante comprobante) {
        this.comprobante = comprobante;
    }

    public String build() {
        try {
            JAXBContext context = JAXBContext.newInstance(Comprobante.class);
            Marshaller marshaller = context.createMarshaller();
            
            // Format output and add schema locations
            marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
            marshaller.setProperty(Marshaller.JAXB_SCHEMA_LOCATION, "http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio_internet/cfd/4/cfdv40.xsd");
            
            StringWriter writer = new StringWriter();
            marshaller.marshal(comprobante, writer);
            return writer.toString();
        } catch (JAXBException e) {
            throw new SatValidationException("Error building XML from domain model: " + e.getMessage());
        }
    }
}
