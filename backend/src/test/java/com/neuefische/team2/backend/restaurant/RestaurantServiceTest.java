package com.neuefische.team2.backend.restaurant;

import com.neuefische.team2.backend.restaurant.domain.Restaurant;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
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
    void getRestaurants_whenOneRestaurantInDB_thenReturnListOfOne() {
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
    void addRestaurant_whenRestaurantDTO_thenReturnRestaurantWithId() {
        //GIVEN
        Restaurant restaurantToSave = new Restaurant(null, "The Mockingbird", "New York");
        Restaurant savedRestaurant = new Restaurant("1", "The Mockingbird", "New York");
        when(mockRestaurantRepository.save(restaurantToSave)).thenReturn(savedRestaurant);

        //WHEN
        Restaurant actual = restaurantService.addRestaurant(restaurantToSave);

        //THEN
        verify(mockRestaurantRepository).save(restaurantToSave);
        assertEquals(savedRestaurant, actual);
    }
}
