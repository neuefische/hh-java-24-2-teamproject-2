package com.neuefische.team2.backend.auth;

import com.neuefische.team2.backend.auth.domain.AuthDTO;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("/me")
    public AuthDTO getMe(@AuthenticationPrincipal OAuth2User user) {
        Map<String, Object> returnValue = user.getAttributes();

        return new AuthDTO(
                returnValue.get("id").toString(),
                returnValue.get("login").toString(),
                returnValue.get("avatar_url").toString(),
                returnValue.get("name").toString()
        );
    }
}
