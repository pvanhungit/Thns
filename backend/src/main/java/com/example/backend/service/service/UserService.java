package com.example.backend.service.service;

import com.example.backend.domain.User;
import com.example.backend.dto.UserDto;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUser();
    Optional<User> getUserById(Long userId);
    UserDto addUser(UserDto userDto);
    UserDto updateUser(UserDto userDto);
    boolean deleteUser(Long userId);
}
