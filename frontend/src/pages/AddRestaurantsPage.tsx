import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import RestaurantForm from "../components/RestaurantForm/RestaurantForm.tsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {NewRestaurantDTOType} from "../model/Restaurant.ts";

export default function AddRestaurantsPage() {

    const navigate = useNavigate();

    function handleAddRestaurant(formData: NewRestaurantDTOType) {
        axios.post("/api/restaurants", formData)
            .then(() => {
                navigate("/")
            })
            .catch((error) => {
                window.console.error(error.message)
            })
    }

    return (
        <DefaultPageTemplate pageTitle="New restaurant">
            <RestaurantForm onSubmit={handleAddRestaurant} restaurantData={null}/>
        </DefaultPageTemplate>
    )
}