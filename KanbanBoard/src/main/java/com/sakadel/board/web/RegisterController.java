package com.sakadel.board.web;

import com.sakadel.board.domain.Role;
import com.sakadel.board.domain.User;
import com.sakadel.board.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Collections;
import java.util.Map;

@Controller
public class RegisterController {
    @Autowired
    private UserRepository userRepo;

    @GetMapping("/registration")
    public String registration() {
        return "registration";
    }

    @PostMapping("/registration")
    public void addUser(User user, Map<String, Object> model) {
        User userFromDb = userRepo.findByUsername(user.getUsername());

        if (userFromDb != null) {
            model.put("message", "User exists!");
            //return "registration";
        }

        user.setActive(true);
        user.setRoles(Collections.singleton(Role.USER));
        userRepo.save(user);

        //return "redirect:/login";
    }
}