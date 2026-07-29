package com.cdmx.apicore.sat.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import java.math.BigDecimal;
import java.util.List;

public class InvoiceRequestDto {

    @NotBlank
    @Pattern(regexp = "^[A-Z&Ñ]{3,4}[0-9]{6}[A-Z0-9]{3}$", message = "Formato de RFC emisor inválido")
    private String emisorRfc;
    
    @NotBlank
    private String emisorNombre;

    @NotBlank
    private String emisorRegimenFiscal;

    @NotBlank
    private String emisorCodigoPostal;
    
    @NotBlank
    @Pattern(regexp = "^[A-Z&Ñ]{3,4}[0-9]{6}[A-Z0-9]{3}$", message = "Formato de RFC receptor inválido")
    private String receptorRfc;
    
    @NotBlank
    private String receptorNombre;

    @NotBlank
    private String receptorCodigoPostal;

    @NotBlank
    private String receptorRegimenFiscal;
    
    @NotBlank
    private String usoCfdi;

    @NotBlank
    private String formaPago;

    @NotBlank
    private String metodoPago;
    
    @NotBlank
    private String tipoDeComprobante; // I, E, T, N, P
    
    @NotEmpty
    @Valid
    private List<ConceptoDto> conceptos;

    public String getEmisorRfc() { return emisorRfc; }
    public void setEmisorRfc(String emisorRfc) { this.emisorRfc = emisorRfc; }

    public String getEmisorNombre() { return emisorNombre; }
    public void setEmisorNombre(String emisorNombre) { this.emisorNombre = emisorNombre; }

    public String getEmisorRegimenFiscal() { return emisorRegimenFiscal; }
    public void setEmisorRegimenFiscal(String emisorRegimenFiscal) { this.emisorRegimenFiscal = emisorRegimenFiscal; }

    public String getEmisorCodigoPostal() { return emisorCodigoPostal; }
    public void setEmisorCodigoPostal(String emisorCodigoPostal) { this.emisorCodigoPostal = emisorCodigoPostal; }

    public String getReceptorRfc() { return receptorRfc; }
    public void setReceptorRfc(String receptorRfc) { this.receptorRfc = receptorRfc; }

    public String getReceptorNombre() { return receptorNombre; }
    public void setReceptorNombre(String receptorNombre) { this.receptorNombre = receptorNombre; }

    public String getReceptorCodigoPostal() { return receptorCodigoPostal; }
    public void setReceptorCodigoPostal(String receptorCodigoPostal) { this.receptorCodigoPostal = receptorCodigoPostal; }

    public String getReceptorRegimenFiscal() { return receptorRegimenFiscal; }
    public void setReceptorRegimenFiscal(String receptorRegimenFiscal) { this.receptorRegimenFiscal = receptorRegimenFiscal; }

    public String getUsoCfdi() { return usoCfdi; }
    public void setUsoCfdi(String usoCfdi) { this.usoCfdi = usoCfdi; }

    public String getFormaPago() { return formaPago; }
    public void setFormaPago(String formaPago) { this.formaPago = formaPago; }

    public String getMetodoPago() { return metodoPago; }
    public void setMetodoPago(String metodoPago) { this.metodoPago = metodoPago; }

    public String getTipoDeComprobante() { return tipoDeComprobante; }
    public void setTipoDeComprobante(String tipoDeComprobante) { this.tipoDeComprobante = tipoDeComprobante; }

    public List<ConceptoDto> getConceptos() { return conceptos; }
    public void setConceptos(List<ConceptoDto> conceptos) { this.conceptos = conceptos; }

    public static class ConceptoDto {
        @NotBlank
        private String claveProdServ;

        @NotNull
        private BigDecimal cantidad;

        @NotBlank
        private String claveUnidad;

        @NotBlank
        private String descripcion;

        @NotNull
        private BigDecimal valorUnitario;

        private boolean incluyeIva16 = true;

        public String getClaveProdServ() { return claveProdServ; }
        public void setClaveProdServ(String claveProdServ) { this.claveProdServ = claveProdServ; }

        public BigDecimal getCantidad() { return cantidad; }
        public void setCantidad(BigDecimal cantidad) { this.cantidad = cantidad; }

        public String getClaveUnidad() { return claveUnidad; }
        public void setClaveUnidad(String claveUnidad) { this.claveUnidad = claveUnidad; }

        public String getDescripcion() { return descripcion; }
        public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

        public BigDecimal getValorUnitario() { return valorUnitario; }
        public void setValorUnitario(BigDecimal valorUnitario) { this.valorUnitario = valorUnitario; }

        public boolean isIncluyeIva16() { return incluyeIva16; }
        public void setIncluyeIva16(boolean incluyeIva16) { this.incluyeIva16 = incluyeIva16; }
    }
}
