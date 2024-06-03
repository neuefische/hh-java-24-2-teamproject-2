package com.neuefische.team2.backend.exceptions.domain;

import java.util.List;

public record ExceptionResponse(
        List<ExceptionResponseMessage> errors
) {
}
