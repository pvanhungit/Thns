package com.thns.service.service;

import com.thns.domain.User;
import com.thns.dto.UserDto;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUser();
    Optional<User> getUserById(Long userId);
    UserDto addUser(UserDto userDto);
    UserDto updateUser(UserDto userDto);
    boolean deleteUser(Long userId);
}
