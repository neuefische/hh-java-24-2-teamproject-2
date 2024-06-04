package com.neuefische.team2.backend.restaurant;

import com.neuefische.team2.backend.exceptions.NoSuchRestaurantException;
import com.neuefische.team2.backend.restaurant.domain.Restaurant;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;

    public RestaurantService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    public List<Restaurant> getRestaurants() {
        return restaurantRepository.findAll();
    }

    public Restaurant findRestaurantById(String id) {
        return restaurantRepository.findById(id).orElseThrow(() -> new NoSuchRestaurantException("Restaurant with id " + id + " not found"));
    }

    public Restaurant addRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }
}
