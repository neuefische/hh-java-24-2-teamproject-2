package com.neuefische.team2.backend.exceptions.domain;

public record ExceptionResponseMessage(
        String field,
        String message
) {
}
