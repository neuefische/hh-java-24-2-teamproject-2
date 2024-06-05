package com.neuefische.team2.backend.restaurant.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("restaurants")
public record Restaurant(
        @Id
        String id,
        String title,
        String city
) {
}
