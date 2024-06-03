package com.neuefische.team2.backend.restaurant;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neuefische.team2.backend.restaurant.domain.NewRestaurantDTO;
import com.neuefische.team2.backend.restaurant.domain.Restaurant;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
class RestaurantControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void getAllProducts_whenNoProductInDB_thenReturnEmptyList() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[]"));
    }

    // TODO: Write a test to receive one restaurant as soon as POST endpoint is implemented.


    @Test
    void updateRestaurant_whenRestaurantExists_thenReturnUpdatedRestaurant() throws Exception {
        // Arrange: Add a restaurant to the DB
        NewRestaurantDTO newRestaurant = new NewRestaurantDTO("Old Name", "Old City");
        String responseContent = mockMvc.perform(MockMvcRequestBuilders.post("/api/restaurants")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(newRestaurant)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn().getResponse().getContentAsString();

        Restaurant createdRestaurant = objectMapper.readValue(responseContent, Restaurant.class);

        // Act: Update the restaurant
        NewRestaurantDTO updatedRestaurant = new NewRestaurantDTO("New Name", "New City");
        mockMvc.perform(MockMvcRequestBuilders.put("/api/restaurants/" + createdRestaurant.id())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updatedRestaurant)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.title").value("New Name"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.city").value("New City"));
    }

    @Test
    void updateRestaurant_whenRestaurantDoesNotExist_thenReturnNotFound() throws Exception {
        // Act: Try to update a non-existing restaurant
        Restaurant updatedRestaurant = new Restaurant(null, "New Name", "New City");
        mockMvc.perform(MockMvcRequestBuilders.put("/api/restaurants/999")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updatedRestaurant)))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }
}



