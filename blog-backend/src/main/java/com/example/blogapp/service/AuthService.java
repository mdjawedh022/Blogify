package com.example.blogapp.service;

import com.example.blogapp.entity.User;
import com.example.blogapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepo;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public void register(String email, String password) {
        User user = new User();
        user.setEmail(email);
        user.setPassword(encoder.encode(password));
        userRepo.save(user);
    }

    public String login(String email, String password) {
        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Wrong password");
        }

        return "LOGIN SUCCESS";
    }
}
