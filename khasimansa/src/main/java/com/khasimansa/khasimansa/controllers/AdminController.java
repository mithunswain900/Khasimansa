package com.khasimansa.khasimansa.controllers;

import com.khasimansa.khasimansa.DTO.LoginDtoResponse;
import com.khasimansa.khasimansa.entity.Admin;
import com.khasimansa.khasimansa.models.LoginRequest;
import com.khasimansa.khasimansa.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/adminlogin")
    public ResponseEntity<LoginDtoResponse> login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Optional<Admin> adminOpt = adminService.validateLogin(email, password);

        if (adminOpt.isPresent()) {
            return ResponseEntity.ok(new LoginDtoResponse("success", "Login successful", adminOpt.get()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginDtoResponse("error", "Invalid email or password", null));
        }
    }
}