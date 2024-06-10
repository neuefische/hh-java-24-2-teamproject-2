package com.neuefische.team2.backend.auth.domain;

public record AuthDTO(
        String id,
        String login,
        String avatar_url,
        String name
) {
}
