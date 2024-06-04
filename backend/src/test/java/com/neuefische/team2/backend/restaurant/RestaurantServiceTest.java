package com.neuefische.team2.backend.restaurant;

import com.neuefische.team2.backend.restaurant.domain.Restaurant;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
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
    void findRestaurantById_whenRestaurantExists_thenReturnRestaurant() {
        //GIVEN
        Restaurant restaurant = new Restaurant("1", "The Mockingbird", "New York");
        when(mockRestaurantRepository.findById("1")).thenReturn(Optional.of(restaurant));

        // WHEN
        Restaurant actual = restaurantService.findRestaurantById("1");

        //THEN
        verify(mockRestaurantRepository).findById("1");

        assertEquals(restaurant, actual);
    }

    @Test
    void findRestaurantById_whenRestaurantDoesNotExist_thenThrowException() {
        //GIVEN
        when(mockRestaurantRepository.findById("1")).thenReturn(Optional.empty());

        //THEN
        assertThrowsExactly(NoSuchElementException.class, () -> restaurantService.findRestaurantById("1"));

        verify(mockRestaurantRepository).findById("1");
    }

}
