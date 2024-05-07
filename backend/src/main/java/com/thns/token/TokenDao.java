package com.thns.token;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TokenDao extends JpaRepository<Token, Integer> {

    List<Token> findAllValidTokenByUser(Long id);

    Optional<Token> findByToken(String token);
}
