import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { RestaurantType } from "../../model/Restaurant.ts";

import Button from "../Button/Button.tsx";

export default function RestaurantDetails() {
    const { id } = useParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<RestaurantType>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`/api/restaurants/${id}`)
            .then(response => {
                setRestaurant(response.data);
            })
            .catch(error => {
                setError("There was an error fetching the restaurant details!");
                console.error(error);
            });
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!restaurant) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{restaurant.title}</h1>
            <br/>
            <p>{restaurant.city}</p>
            <br/>
            <h1>weitere Details 1</h1>
            <br/>
            <h1>weitere Details 2</h1>
            <br/>
            <Button href="/">Back</Button>
        </div>
    );
}
