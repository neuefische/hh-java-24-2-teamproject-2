package com.neuefische.team2.backend.restaurant.domain;

import jakarta.validation.constraints.NotBlank;

public record NewRestaurantDTO(
        @NotBlank(message="Title must not be empty")
        String title,
        @NotBlank(message="City must not be empty")
        String city
) {
}
