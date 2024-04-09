package com.example.backend.dao.jpa;

import com.example.backend.dao.UserDao;
import com.example.backend.domain.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository("userJpaDao")
public abstract class UserJpaDao implements UserDao {
//    public UserJpaDao() {
//        super(Users.class);
//    }
//
    @Override
    public Optional<User> findById (Long id) {
        return findById(id);
    }
}
