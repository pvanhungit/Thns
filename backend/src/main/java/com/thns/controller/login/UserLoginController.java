package com.thns.controller.login;

import com.thns.controller.ExceptionResolver;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserLoginController extends ExceptionResolver {
    @GetMapping("/home")
    public ResponseEntity<?> home() {
        return ResponseEntity.status(HttpStatus.OK).body("Hello User, Home!");
    }

    @GetMapping("/secured")
    public ResponseEntity<?> secured() {
        return ResponseEntity.status(HttpStatus.OK).body("Hello User, Secured!");
    }
}
