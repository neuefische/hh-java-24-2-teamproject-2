package com.neuefische.team2.backend.restaurant;

import com.neuefische.team2.backend.restaurant.domain.Restaurant;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@SpringBootTest
@AutoConfigureMockMvc
class RestaurantControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    RestaurantRepository restaurantRepository;

    @Test
    void getAllProducts_whenProductInDB_thenReturnEmptyList() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[]"));
    }

    @Test
    void getRestaurantById_whenRestaurantExists_thenReturnRestaurant() throws Exception {
        //GIVEN
        Restaurant restaurant = new Restaurant("1", "The Mockingbird", "New York");
        restaurantRepository.save(restaurant);
        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants/1"))
                //THEN
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                        [
                            {
                              "id": "1",
                              "title": "The Mockingbird",
                              "city": "New York"
                            }
                        ]
                        """));
    }

    @Test
    void getRestaurantById_whenRestaurantDoesNotExist_thenReturnNotFound() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants/999"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }



    // TODO: Write a test to receive one restaurant as soon as POST endpoint is implemented.
}
