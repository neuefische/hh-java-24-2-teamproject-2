package com.neuefische.team2.backend.restaurant;

import com.neuefische.team2.backend.exceptions.ResourceNotFoundException;
import com.neuefische.team2.backend.restaurant.domain.NewRestaurantDTO;
import com.neuefische.team2.backend.exceptions.NoSuchRestaurantException;
import com.neuefische.team2.backend.restaurant.domain.Restaurant;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {
    Logger logger = LoggerFactory.getLogger(RestaurantService.class);

    private final RestaurantRepository restaurantRepository;

    public RestaurantService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    public List<Restaurant> getRestaurants() {
        return restaurantRepository.findAll();
    }

    public Restaurant findRestaurantById(String id) {
        logger.info("Trying to find restaurant with ID {}", id);

        Restaurant restaurant = restaurantRepository.findById(id)
                .orElseThrow(() -> {
                    logger.error("Could not find restaurant with ID {}", id);
                    return new NoSuchRestaurantException("Restaurant with id " + id + " not found");
                });

        logger.info("Found restaurant with ID {}", id);

        return restaurant;
    }

    public Restaurant addRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public Restaurant updateRestaurant(NewRestaurantDTO updatedRestaurantDTO, String id) throws ResourceNotFoundException {
        Optional<Restaurant> existingRestaurant = restaurantRepository.findById(id);
        if (existingRestaurant.isPresent()) {
            Restaurant updatedRestaurant = new Restaurant(id, updatedRestaurantDTO.title().trim(), updatedRestaurantDTO.city().trim());
            return restaurantRepository.save(updatedRestaurant);
        } else {
            throw new ResourceNotFoundException("Restaurant not found with id " + id);
        }
    }
}
