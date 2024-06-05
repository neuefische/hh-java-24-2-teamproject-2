package com.neuefische.team2.backend.exceptions;

import java.util.NoSuchElementException;

public class NoSuchRestaurantException extends NoSuchElementException {
    public NoSuchRestaurantException(String message) {
        super(message);
    }
}
