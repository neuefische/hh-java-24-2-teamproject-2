import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {NewRestaurantDTOType, RestaurantType} from "../model/Restaurant.ts";
import axios from "axios";
import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import RestaurantForm from "../components/RestaurantForm/RestaurantForm.tsx";

export default function RestaurantEditPage(){

    const navigate = useNavigate();
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
        return <DefaultPageTemplate>{error}</DefaultPageTemplate>;
    }

    if (!restaurant) {
        return <DefaultPageTemplate>Loading...</DefaultPageTemplate>;
    }

    function handleEditRestaurant(formData: NewRestaurantDTOType) {
        axios.put(`/api/restaurants/${id}`, formData)
            .then(() => {
                navigate("/")
            })
            .catch((error) => {
                window.console.error(error.message)
            })
    }

    return (
        <DefaultPageTemplate pageTitle="Edit restaurant">
            <RestaurantForm onSubmit={handleEditRestaurant} restaurantData={restaurant}/>
        </DefaultPageTemplate>
    )
}