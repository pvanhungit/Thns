package com.thns.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.PrintWriter;
import java.io.StringWriter;

public class ExceptionResolver {
    private final Logger logger = LoggerFactory.getLogger(ExceptionResolver.class);

    @SuppressWarnings("rawtypes")
    @ExceptionHandler(Exception.class)
    public @ResponseBody ResponseEntity handleIDentalException(Exception ex) {
        StringWriter sw = new StringWriter();
        ex.printStackTrace(new PrintWriter(sw));
        ex.printStackTrace();
        logger.error("[ExceptionResolver] , error: " + sw.toString());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error: " + ex.getMessage());

    }
}
