package com.example.backend.dao;

import com.example.backend.domain.User;

import java.util.Optional;

public interface UserDao extends GenericDao<User, Long> {
    Optional<User> findById(Long id);
}
