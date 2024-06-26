package com.neuefische.team2.backend.restaurant;

import com.neuefische.team2.backend.restaurant.domain.NewRestaurantDTO;
import com.neuefische.team2.backend.exceptions.ResourceNotFoundException;
import com.neuefische.team2.backend.restaurant.domain.Restaurant;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
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

    @GetMapping("/{id}")
    Restaurant getRestaurantById(@PathVariable @Valid String id) {
        return restaurantService.findRestaurantById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Restaurant addRestaurant(@RequestBody @Valid NewRestaurantDTO newRestaurantDTO) {
        Restaurant restaurant = new Restaurant(null, newRestaurantDTO.title(), newRestaurantDTO.city());
        return restaurantService.addRestaurant(restaurant);
    }

    @PutMapping("{id}")
    Restaurant putRestaurant(@Valid @RequestBody NewRestaurantDTO newRestaurantDTO, @PathVariable String id) throws ResourceNotFoundException {
        return restaurantService.updateRestaurant(newRestaurantDTO, id);
    }

    @DeleteMapping("{id}")
    void deleteRestaurant(@PathVariable String id) {
        restaurantService.deleteRestaurant(id);
    }
}
