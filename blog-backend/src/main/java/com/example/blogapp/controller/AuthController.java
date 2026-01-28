package com.example.blogapp.controller;

import com.example.blogapp.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody Map<String, String> req) {
        authService.register(req.get("email"), req.get("password"));
        return "User registered";
    }

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> req) {
        return authService.login(req.get("email"), req.get("password"));
    }
}
