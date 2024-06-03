package com.neuefische.team2.backend.restaurant;

import com.neuefische.team2.backend.restaurant.domain.NewRestaurantDTO;
import com.neuefische.team2.backend.restaurant.domain.Restaurant;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {

    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping
    List<Restaurant> getRestaurants() {
        return restaurantService.getRestaurants();
    }

    @PostMapping
    Restaurant addRestaurant(@RequestBody NewRestaurantDTO newRestaurantDTO) {
        Restaurant restaurant = new Restaurant(null, newRestaurantDTO.title(), newRestaurantDTO.title());
        return restaurantService.addRestaurant(restaurant);
    }
}
