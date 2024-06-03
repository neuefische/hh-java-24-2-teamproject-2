import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import RestaurantForm from "../components/RestaurantForm/RestaurantForm.tsx";

export default function AddRestaurantsPage() {
    return (
        <DefaultPageTemplate pageTitle="New restaurant">
            <RestaurantForm />
        </DefaultPageTemplate>
    )
}