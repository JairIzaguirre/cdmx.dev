package com.cdmx.apicore.sat.crypto;

import com.cdmx.apicore.sat.exception.SatValidationException;
import org.springframework.stereotype.Service;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.Signature;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;

/**
 * Handles the generation of the "Cadena Original" and the cryptographic "Sello" (Signature).
 */
@Service
public class SelloGenerator {

    // Usually loaded from a local classpath resource or an online SAT URL.
    private static final String XSLT_URL = "http://www.sat.gob.mx/sitio_internet/cfd/4/cadenaoriginal_4_0/cadenaoriginal_4_0.xslt";

    /**
     * Transforms the CFDI XML into the Cadena Original string.
     */
    public String generateCadenaOriginal(String xmlString) {
        try {
            TransformerFactory factory = TransformerFactory.newInstance();
            // Note: In production, fetching this from SAT every time is slow.
            // It should be cached locally or we should download the XSLT and its dependencies.
            StreamSource xsltSource = new StreamSource(XSLT_URL);
            Transformer transformer = factory.newTransformer(xsltSource);

            InputStream xmlInputStream = new ByteArrayInputStream(xmlString.getBytes(StandardCharsets.UTF_8));
            StreamSource xmlSource = new StreamSource(xmlInputStream);

            ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
            StreamResult result = new StreamResult(outputStream);

            transformer.transform(xmlSource, result);

            return outputStream.toString(StandardCharsets.UTF_8);
        } catch (Exception e) {
            throw new SatValidationException("Error generating Cadena Original: " + e.getMessage());
        }
    }

    /**
     * Signs the Cadena Original using the Emisor's Private Key (PKCS8 format) using SHA256withRSA.
     */
    public String generateSello(String cadenaOriginal, byte[] privateKeyBytes) {
        try {
            PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(privateKeyBytes);
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            PrivateKey privateKey = keyFactory.generatePrivate(keySpec);

            Signature signature = Signature.getInstance("SHA256withRSA");
            signature.initSign(privateKey);
            signature.update(cadenaOriginal.getBytes(StandardCharsets.UTF_8));

            byte[] signedBytes = signature.sign();
            return Base64.getEncoder().encodeToString(signedBytes);
        } catch (Exception e) {
            throw new SatValidationException("Error generating Sello Digital: " + e.getMessage());
        }
    }
}
