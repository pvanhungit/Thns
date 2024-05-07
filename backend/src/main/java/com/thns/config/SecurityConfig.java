package com.thns.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import static com.thns.user.Permission.*;
import static com.thns.user.Role.ADMIN;
import static com.thns.user.Role.MANAGER;
import static org.springframework.security.config.Customizer.withDefaults;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfig {

    private static final String[] WHITE_LIST_URL = {"v1/auth/**"};
    @Autowired
    private AuthenticationProvider authenticationProvider;

    @Autowired
    private JwtAuthenticationFilter jwtAuthFilter;

    @Autowired
    private LogoutHandler logoutHandler;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth ->
                        auth
                                .requestMatchers(WHITE_LIST_URL).permitAll()
                                .requestMatchers("/guest/**").authenticated() // guest is user can view web
                                .requestMatchers("/user/**").hasAnyRole(ADMIN.name(), MANAGER.name())

                                .requestMatchers("/v1/admin/**").hasAnyRole(ADMIN.name(), MANAGER.name())
                                .requestMatchers(HttpMethod.GET, "/v1/admin/**").hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
                                .requestMatchers(HttpMethod.POST, "/v1/admin/**").hasAnyAuthority(ADMIN_CREATE.name())
                                .requestMatchers(HttpMethod.PUT, "/v1/admin/**").hasAnyAuthority(ADMIN_UPDATE.name())
                                .requestMatchers(HttpMethod.DELETE, "/v1/admin/**").hasAnyAuthority(ADMIN_DELETE.name())

                                .anyRequest().authenticated()
                )
//                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
//                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout(logout ->
                        logout
                                .logoutUrl("/v1/auth/logout")
                                .addLogoutHandler(logoutHandler)
                                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
                )
                .oauth2Login(withDefaults());
//                .formLogin(withDefaults());

        return http.build();
    }
}
