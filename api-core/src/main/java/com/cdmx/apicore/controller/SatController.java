package com.cdmx.apicore.controller;

import com.cdmx.apicore.sat.dto.InvoiceRequestDto;
import com.cdmx.apicore.sat.exception.SatValidationException;
import com.cdmx.apicore.sat.facade.SatEngineFacade;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ExceptionHandler;

@RestController
@RequestMapping("/api/v1/sat")
public class SatController {

    private final SatEngineFacade satEngineFacade;

    public SatController(SatEngineFacade satEngineFacade) {
        this.satEngineFacade = satEngineFacade;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateCfdi(@RequestBody InvoiceRequestDto request) {
        String xmlResponse = satEngineFacade.processRequest(request);
        return ResponseEntity.ok(xmlResponse);
    }

    @ExceptionHandler(SatValidationException.class)
    public ResponseEntity<String> handleSatValidationException(SatValidationException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }
}
