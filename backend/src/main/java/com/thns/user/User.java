package com.thns.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;

@SuppressWarnings("serial")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "USERS")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "FIRST_NAME", length = 100)
    private String firstName;

    @Column(name = "LAST_NAME", length = 100)
    private String lastName;

    @Column(name = "EMAIL", length = 100, unique = true)
    private String email;

    @Column(name = "PASSWORD", length = 200)
    private String password;

    @Column(name = "TYPE")
    private int type;

    @Column(name = "ROLE")
    @Enumerated(EnumType.ORDINAL)
    private Role role;

//    @OneToMany(mappedBy = "user")
//    private List<Token> tokens;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "CREATE_TIME")
    private Date createTime;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "UPDATE_TIME")
    private Date updateTime;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role.getAuthorities();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

