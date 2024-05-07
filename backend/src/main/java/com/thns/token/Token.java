package com.thns.token;

import com.thns.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;


@NamedQueries({
        @NamedQuery(name = Token.FIND_ALL_VALID_TOKEN_BY_USER,
                query = "select t from Token t inner join User u " +
                        "on t.user.id = u.id " +
                        "where u.id = :id and (t.expired = false or t.revoked = false)")
})

@SuppressWarnings("serial")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "TOKEN")
public class Token implements Serializable {
    public static final String FIND_ALL_VALID_TOKEN_BY_USER = "Token.findAllValidTokenByUser";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    public Long id;

    @Column(name = "TOKEN", unique = true)
    public String token;

    @Column(name = "TOKEN_TYPE")
    @Enumerated(EnumType.STRING)
    public TokenType tokenType = TokenType.BEARER;

    @Column(name = "REVOKED")
    public boolean revoked;

    @Column(name = "EXPIRED")
    public boolean expired;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    public User user;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "CREATE_TIME")
    private Date createTime;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "UPDATE_TIME")
    private Date updateTime;
}
