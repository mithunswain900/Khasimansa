package com.khasimansa.khasimansa.services;

import com.khasimansa.khasimansa.entity.Admin;
import com.khasimansa.khasimansa.repositry.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Optional<Admin> validateLogin(String email, String rawPassword) {
        System.out.println("Validating login for: " + email);
        System.out.println("PasswordEncoder is null? " + (passwordEncoder == null));

        return adminRepository.findByEmail(email)
                .filter(admin -> rawPassword.equals(admin.getPassword())); // temporarily bypass hashing
    }
}