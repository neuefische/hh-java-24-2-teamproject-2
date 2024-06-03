package com.neuefische.team2.backend.exceptions;

import com.neuefische.team2.backend.exceptions.domain.ExceptionResponse;
import com.neuefische.team2.backend.exceptions.domain.ExceptionResponseMessage;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;


@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ExceptionResponse handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {

        List<ExceptionResponseMessage> errors = exception.getFieldErrors()
                .stream()
                .map(error -> new ExceptionResponseMessage(error.getField(), error.getDefaultMessage()))
                .toList();

        return new ExceptionResponse(errors);
    }
}
