package com.thns.controller.login;

import com.thns.controller.ExceptionResolver;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class RootController extends ExceptionResolver {
    @GetMapping()
    public ResponseEntity<?> root(@AuthenticationPrincipal OAuth2User oauth2User) {
        String email = oauth2User.getAttribute("email");
        String name = oauth2User.getAttribute("name");

        return ResponseEntity.status(HttpStatus.OK).body("Hello " + (email != null ? email : name) + ", this is root Home!");
    }
}
