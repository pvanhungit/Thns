package com.thns.controller;

import com.thns.domain.User;
import com.thns.dto.UserDto;
import com.thns.service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController extends ExceptionResolver {
    @Autowired
    @Qualifier("userService")
    private UserService userService;

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllPersons() {
        List<User> listUser = userService.getAllUser();

        if (listUser != null && listUser.size() != 0) {
            return ResponseEntity.status(HttpStatus.OK).body(listUser);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @GetMapping("/findById/{userId}")
    public ResponseEntity<?> getFindPersons(@PathVariable String userId) {
        Optional<User> user = userService.getUserById(Long.valueOf(userId));

        if (user != null && user.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(user.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody UserDto userDto) {
        UserDto newUser = userService.addUser(userDto);

        if (newUser != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
        } else {
            return ResponseEntity.status(HttpStatus.FOUND).body("User already exists");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody UserDto userDto) {
        UserDto updatedUser = userService.updateUser(userDto);

        if (updatedUser != null) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(updatedUser);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        boolean deleted = userService.deleteUser(userId);

        if (deleted) {
            return ResponseEntity.status(HttpStatus.OK).body("User deleted");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

}
