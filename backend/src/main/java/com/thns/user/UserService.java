package com.thns.user;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUser();
    Optional<User> getUserById(Long userId);
    UserDto addUser(UserDto userDto);
    UserDto updateUser(UserDto userDto);
    boolean deleteUser(Long userId);
    void changePassword(ChangePasswordRequest request, Principal connectedUser);
}
