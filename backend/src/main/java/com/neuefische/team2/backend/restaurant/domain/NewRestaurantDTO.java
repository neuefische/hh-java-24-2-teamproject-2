package com.neuefische.team2.backend.restaurant.domain;

import jakarta.validation.constraints.NotBlank;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("restaurants")
public record NewRestaurantDTO(
        @NotBlank(message = "Restaurant-Titel muss vorhanden sein.")
        String title,

        @NotBlank(message = "Restaurant-Stadt muss vorhanden sein.")
        String city
) {
}
