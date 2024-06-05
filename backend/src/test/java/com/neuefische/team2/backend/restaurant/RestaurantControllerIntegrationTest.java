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

    @DirtiesContext
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

    @DirtiesContext
    @Test
    void addRestaurant_whenTitleEmptyString_thenReturnException() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/restaurants")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "title": "",
                                    "city": "New York"
                                }
                                """))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.content().json("""
                        {
                            "errors": [
                                {
                                    "field": "title",
                                    "message": "Title must not be empty"
                                }
                            ]
                        }
                        """));
    }

    @DirtiesContext
    @Test
    void addRestaurant_whenCityEmptyString_thenReturnException() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/restaurants")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "title": "The Mockingbird",
                                    "city": ""
                                }
                                """))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.content().json("""
                        {
                            "errors": [
                                {
                                    "field": "city",
                                    "message": "City must not be empty"
                                }
                            ]
                        }
                        """));
    }

    @DirtiesContext
    @Test
    void addRestaurant_whenTitleAndCityEmptyString_thenReturnException() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/restaurants")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "title": "",
                                    "city": ""
                                }
                                """))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.content().json("""
                        {
                            "errors": [
                                {
                                    "field": "city",
                                    "message": "City must not be empty"
                                },
                                {
                                    "field": "title",
                                    "message": "Title must not be empty"
                                }
                            ]
                        }
                        """));
    }

    @DirtiesContext
    @Test
    void addRestaurant_whenTitleAndCityContainOnlySpaces_thenReturnException() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/restaurants")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                    "title": "   ",
                                    "city": "      "
                                }
                                """))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.content().json("""
                        {
                            "errors": [
                                {
                                    "field": "city",
                                    "message": "City must not be empty"
                                },
                                {
                                    "field": "title",
                                    "message": "Title must not be empty"
                                }
                            ]
                        }
                        """));
    }
    @Test
    void getRestaurantById_whenRestaurantExists_thenReturnRestaurant() throws Exception {
        //GIVEN
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/api/restaurants")
                    .contentType(MediaType.APPLICATION_JSON)
                        .content("""                        
                            {
                              "title": "The Mockingbird",
                              "city": "New York"
                            }
                        """)).andReturn();
        ObjectMapper mapper = new ObjectMapper();
        Restaurant restaurant = mapper.readValue(result.getResponse().getContentAsString(), Restaurant.class);

        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants/" + restaurant.id()))
                //THEN
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("""
                            {
                              "title": "The Mockingbird",
                              "city": "New York"
                            }
                        """))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(restaurant.id()));
    }

    @Test
    void getRestaurantById_whenRestaurantDoesNotExist_thenReturnNotFound() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants/999"))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andExpect(MockMvcResultMatchers.content().string("Restaurant with id 999 not found"));
    }



}
