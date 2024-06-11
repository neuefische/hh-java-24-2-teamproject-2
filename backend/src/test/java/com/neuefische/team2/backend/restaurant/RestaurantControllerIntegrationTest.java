package com.neuefische.team2.backend.restaurant;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neuefische.team2.backend.restaurant.domain.NewRestaurantDTO;
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

    ObjectMapper objectMapper = new ObjectMapper();

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

    @Test
    void updateRestaurant_whenRestaurantExists_thenReturnUpdatedRestaurant() throws Exception {
        // Arrange: Add a restaurant to the DB
        NewRestaurantDTO newRestaurant = new NewRestaurantDTO("Old Name", "Old City");
        String responseContent = mockMvc.perform(MockMvcRequestBuilders.post("/api/restaurants")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(newRestaurant)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
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
    void deleteRestaurant_whenNoRestaurantInDB_thenDBStaysEmpty() throws Exception {
        //GIVEN
        String id = "123";

        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/restaurants/" + id))
                //THEN
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andExpect(MockMvcResultMatchers.content().string("Restaurant with id 123 not found"));

        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json("[]"));
    }

    @Test
    @DirtiesContext
    void deleteRestaurant_whenRestaurantInDB_thenDBDoesNotContainRestaurantAnymore() throws Exception {
        //GIVEN
        MvcResult resultRestaurantToDelete = mockMvc.perform(MockMvcRequestBuilders.post("/api/restaurants")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""                        
                            {
                              "title": "test-title-to-remove",
                              "city": "test-city"
                            }
                        """)).andReturn();

        MvcResult resultRestaurantToKeep = mockMvc.perform(MockMvcRequestBuilders.post("/api/restaurants")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""                        
                            {
                              "title": "test-title",
                              "city": "test-city"
                            }
                        """)).andReturn();


        ObjectMapper mapper = new ObjectMapper();
        String idToDelete = mapper.readValue(resultRestaurantToDelete.getResponse().getContentAsString(), Restaurant.class).id();

        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/restaurants/" + idToDelete));

        //THEN
        Restaurant expected = mapper.readValue(resultRestaurantToKeep.getResponse().getContentAsString(), Restaurant.class);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/restaurants"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$..id").value(expected.id()))
                .andExpect(MockMvcResultMatchers.jsonPath("$..title").value(expected.title()))
                .andExpect(MockMvcResultMatchers.jsonPath("$..city").value(expected.city()));
    }
}
