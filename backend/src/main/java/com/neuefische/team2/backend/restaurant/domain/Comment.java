package com.neuefische.team2.backend.restaurant.domain;

import jakarta.validation.constraints.NotBlank;

public record Comment(

        @NotBlank(message = "Kommentar muss vorhanden sein.")
        String text,
        long createdAt
) {}
