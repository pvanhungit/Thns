package com.thns.dao.jpa;

import com.thns.dao.UserDao;
import com.thns.domain.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository("userJpaDao")
public abstract class UserJpaDao implements UserDao {

    @Override
    public Optional<User> findById (Long id) {
        return findById(id);
    }
}
