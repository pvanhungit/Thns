package com.example.backend.controller;

import com.example.backend.domain.User;
import com.example.backend.dto.UserDto;
import com.example.backend.service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    @Qualifier("userService")
    private UserService userService;

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllPersons() {
        try {
            List<User> listUser = userService.getAllUser();

            if (listUser != null && listUser.size() != 0) {
                return ResponseEntity.status(HttpStatus.OK).body(listUser);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error get all user: " + e.getMessage());
        }
    }

    @GetMapping("/findById/{userId}")
    public ResponseEntity<?> getFindPersons(@PathVariable String userId) {
        try {
            Optional<User> user = userService.getUserById(Long.valueOf(userId));

            if (user != null && user.isPresent()) {
                return ResponseEntity.status(HttpStatus.OK).body(user.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error find user: " + e.getMessage());
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody UserDto userDto) {
        try {
            UserDto newUser = userService.addUser(userDto);

            if (newUser != null) {
                return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
            } else {
                return ResponseEntity.status(HttpStatus.FOUND).body("User already exists");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding user: " + e.getMessage());
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody UserDto userDto) {
        try {
            UserDto updatedUser = userService.updateUser(userDto);

            if (updatedUser != null) {
                return ResponseEntity.status(HttpStatus.ACCEPTED).body(updatedUser);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating user: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        try {
            boolean deleted = userService.deleteUser(userId);

            if (deleted) {
                return ResponseEntity.status(HttpStatus.OK).body("User deleted");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting user: " + e.getMessage());
        }
    }

}
