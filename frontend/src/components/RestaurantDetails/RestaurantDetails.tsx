import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import { RestaurantType } from "../../model/Restaurant.ts";
import {StyledDetailsButton} from "../RestaurantCard/RestaurantCard.styled.ts";

export default function RestaurantDetails() {
    const { id } = useParams<{ id: string }>();
    const [restaurant, setRestaurant] = useState<RestaurantType>();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

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

    const handleDetailsClick = () => {
        navigate(`/`);
    };

    return (
        <div>
            <h1>{restaurant.title}</h1>
            <p>{restaurant.city}</p>

            <h1>sdofihsdijfpsdjf</h1>
            <br/>
            <h1>uosijdfoisdfoihsodihfosihdf</h1>
            <br/>
            <h1>hier Button um zurückzukommen auf mainpage</h1>
            <StyledDetailsButton onClick={handleDetailsClick}>BACK</StyledDetailsButton>

        </div>
    );
}
