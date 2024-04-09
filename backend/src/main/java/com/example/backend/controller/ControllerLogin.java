package com.example.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class ControllerLogin{

    @GetMapping("/demo")
    public ResponseEntity<?> getAllPersons(){
        return ResponseEntity.status(HttpStatus.OK).body("demo oauth2");
    }
}