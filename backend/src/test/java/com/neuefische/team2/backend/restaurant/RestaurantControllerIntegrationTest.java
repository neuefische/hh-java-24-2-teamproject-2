package com.neuefische.team2.backend.restaurant;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neuefische.team2.backend.restaurant.domain.Restaurant;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@SpringBootTest
@AutoConfigureMockMvc
class RestaurantControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void getAllProducts_whenNoProductInDB_thenReturnEmptyList() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[]"));
    }

    @Test
    void getAllProducts_whenOneProductInDB_thenReturnListOfOne() throws Exception {
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/api/restaurants")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "title": "The Mockingbird",
                                    "city": "New York"
                                }
                                """))
                .andReturn();

        ObjectMapper mapper = new ObjectMapper();
        Restaurant restaurant = mapper.readValue(result.getResponse().getContentAsString(), Restaurant.class);

        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                        [
                            {
                                "title": "The Mockingbird",
                                "city": "New York"
                            }
                        ]
                        """))
                .andExpect(MockMvcResultMatchers.jsonPath("$.[0].id").value(restaurant.id()));
    }


    @DirtiesContext
    @Test
    void addRestaurant_whenNewRestaurantDTO_thenReturnSavedRestaurantWithId() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/restaurants")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "title": "The Mockingbird",
                                    "city": "New York"
                                }
                                """))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.content().json("""
                        {
                            "title": "The Mockingbird",
                            "city": "New York"
                        }
                        """))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists());
    }
}
