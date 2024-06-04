import RestaurantCardList from "../components/RestaurantCardList/RestaurantCardList.tsx";
import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {RestaurantType} from "../model/Restaurant.ts";


export default function RestaurantsPage() {
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);

    useEffect(() => {
        axios.get("/api/restaurants")
            .then((response) => setRestaurants(response.data))
            .catch((error => {
                console.error(error.message);
            }))

    }, []);

    return (
        <DefaultPageTemplate pageTitle="Restaurants">
            <RestaurantCardList restaurants={restaurants}/>
        </DefaultPageTemplate>
    )
}