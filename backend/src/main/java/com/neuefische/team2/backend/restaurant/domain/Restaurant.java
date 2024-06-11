package com.neuefische.team2.backend.restaurant.domain;

import org.springframework.data.annotation.Id;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("restaurants")
public record Restaurant(
        @Id
        String id,

        @NotBlank(message = "Restaurant-Titel muss vorhanden sein.")
        String title,

        @NotBlank(message = "Restaurant-Stadt muss vorhanden sein.")
        String city,
        List<Comment> comments
) {

        public Restaurant(String id, String title, String city) {
                this(id, title, city, List.of());
        }
}
