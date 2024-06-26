package com.neuefische.team2.backend.restaurant.domain;

import org.springframework.data.annotation.Id;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("restaurants")
public record Restaurant(
        @Id
        String id,

        @NotBlank(message = "Restaurant-Titel muss vorhanden sein.")
        String title,

        @NotBlank(message = "Restaurant-Stadt muss vorhanden sein.")
        String city
) {
}
