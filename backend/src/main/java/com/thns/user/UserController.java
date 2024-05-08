package com.thns.user;

import com.thns.controller.ExceptionResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
@PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
public class UserController extends ExceptionResolver {

    private final UserService userService;

    @GetMapping("/getAll")
    @PreAuthorize("hasAnyAuthority('admin:read', 'management:read')")
    public ResponseEntity<?> getAllPersons() {
        List<User> listUser = userService.getAllUser();

        if (listUser != null && listUser.size() != 0) {
            return ResponseEntity.status(HttpStatus.OK).body(listUser);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @GetMapping("/findById/{userId}")
    @PreAuthorize("hasAnyAuthority('admin:read', 'management:read')")
    public ResponseEntity<?> getFindPersons(@PathVariable String userId) {
        Optional<User> user = userService.getUserById(Long.valueOf(userId));

        if (user != null && user.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(user.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @PostMapping("/add")
    @PreAuthorize("hasAnyAuthority('admin:create', 'management:create')")
    public ResponseEntity<?> addUser(@RequestBody UserDto userDto) {
        UserDto newUser = userService.addUser(userDto);

        if (newUser != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
        } else {
            return ResponseEntity.status(HttpStatus.FOUND).body("User already exists");
        }
    }

    @PutMapping("/update")
    @PreAuthorize("hasAnyAuthority('admin:update', 'management:update')")
    public ResponseEntity<?> updateUser(@RequestBody UserDto userDto) {
        UserDto updatedUser = userService.updateUser(userDto);

        if (updatedUser != null) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(updatedUser);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @DeleteMapping("/delete/{userId}")
    @PreAuthorize("hasAnyAuthority('admin:delete', 'management:delete')")
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        boolean deleted = userService.deleteUser(userId);

        if (deleted) {
            return ResponseEntity.status(HttpStatus.OK).body("User deleted");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @PatchMapping("/changePassword")
    @PreAuthorize("hasAnyAuthority('admin:update', 'management:update')")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request
            , Principal connectedUser) {
        userService.changePassword(request, connectedUser);
        return ResponseEntity.status(HttpStatus.OK).body("Password updated");
    }
}
