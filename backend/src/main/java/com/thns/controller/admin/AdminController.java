package com.thns.controller.admin;

import com.thns.controller.ExceptionResolver;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/admin")
@PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
public class AdminController extends ExceptionResolver {
    @GetMapping("/get")
    @PreAuthorize("hasAnyAuthority('admin:read', 'management:read')")
    public String get() {
        return "GET:: admin controller";
    }
    @PostMapping("/add")
    @PreAuthorize("hasAuthority('admin:create')")
    public String post() {
        return "POST:: admin controller";
    }
    @PutMapping("/update")
    @PreAuthorize("hasAuthority('admin:update')")
    public String put() {
        return "PUT:: admin controller";
    }
    @DeleteMapping("/delete")
    @PreAuthorize("hasAuthority('admin:delete')")
    public String delete() {
        return "DELETE:: admin controller";
    }
}
