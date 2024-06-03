package com.neuefische.team2.backend.restaurant;

import com.neuefische.team2.backend.exceptions.ResourceNotFoundException;
import com.neuefische.team2.backend.restaurant.domain.NewRestaurantDTO;
import com.neuefische.team2.backend.restaurant.domain.Restaurant;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class RestaurantServiceTest {

    private final RestaurantRepository mockRestaurantRepository = mock(RestaurantRepository.class);
    private final RestaurantService restaurantService = new RestaurantService(mockRestaurantRepository);

    @Test
    void getRestaurants_whenNoRestaurantsInDB_thenReturnEmptyList() {
        //GIVEN
        when(mockRestaurantRepository.findAll()).thenReturn(Collections.emptyList());

        // WHEN
        List<Restaurant> actual = restaurantService.getRestaurants();

        //THEN
        verify(mockRestaurantRepository).findAll();
        assertTrue(actual.isEmpty());
    }

    @Test
    void getRestaurants_whenOneRestaurantsInDB_thenReturnListOfOne() {
        //GIVEN
        Restaurant restaurant = new Restaurant("1", "The Mockingbird", "New York");
        when(mockRestaurantRepository.findAll()).thenReturn(Collections.singletonList(restaurant));

        // WHEN
        List<Restaurant> actual = restaurantService.getRestaurants();

        //THEN
        verify(mockRestaurantRepository).findAll();
        List<Restaurant> expected = List.of(restaurant);
        assertEquals(expected, actual);
    }

    @Test
    void updateRestaurant_whenRestaurantExists_thenUpdateAndReturnRestaurant() {
        //GIVEN
        Restaurant existingRestaurant = new Restaurant("1", "Old Name", "Old City");
        NewRestaurantDTO updatedRestaurantData = new NewRestaurantDTO("New Name", "New City");
        Restaurant updatedRestaurant = new Restaurant("1", "New Name", "New City");

        when(mockRestaurantRepository.findById("1")).thenReturn(Optional.of(existingRestaurant));
        when(mockRestaurantRepository.save(any(Restaurant.class))).thenReturn(updatedRestaurant);

        // WHEN
        Restaurant actual = restaurantService.updateRestaurant(updatedRestaurantData, "1");

        //THEN
        verify(mockRestaurantRepository).findById("1");
        verify(mockRestaurantRepository).save(any(Restaurant.class));
        assertEquals(updatedRestaurant, actual);
    }

    @Test
    void updateRestaurant_whenRestaurantDoesNotExist_thenThrowResourceNotFoundException() {
        //GIVEN
        NewRestaurantDTO updatedRestaurantData = new NewRestaurantDTO("New Name", "New City");

        when(mockRestaurantRepository.findById("1")).thenReturn(Optional.empty());

        // WHEN / THEN
        assertThrows(ResourceNotFoundException.class, () -> {
            restaurantService.updateRestaurant(updatedRestaurantData, "1");
        });

        verify(mockRestaurantRepository).findById("1");
        verify(mockRestaurantRepository, never()).save(any(Restaurant.class));
    }
}
