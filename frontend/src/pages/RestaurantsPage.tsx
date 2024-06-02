import RestaurantCardList from "../components/RestaurantCardList/RestaurantCardList.tsx";
import {restaurants} from "../data/restaurantData.ts";
import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";

export default function RestaurantsPage() {
    return (
        <DefaultPageTemplate pageTitle={"Restaurants"}>
                <RestaurantCardList restaurants={restaurants}/>
        </DefaultPageTemplate>

    )
}