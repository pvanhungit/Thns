package com.thns.token;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("tokenDao")
public abstract class TokenJpaDao implements TokenDao {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Token> findAllValidTokenByUser(Long id) {
        return entityManager.createNamedQuery(Token.FIND_ALL_VALID_TOKEN_BY_USER, Token.class)
                .setParameter("id", id)
                .getResultList();
    }
}
