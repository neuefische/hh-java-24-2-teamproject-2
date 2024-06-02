import RestaurantCard from "../RestaurantCard/RestaurantCard.tsx";
import {RestaurantType} from "../../model/Restaurant.ts";
import {StyledUnorderedList} from "./RestaurantCardList.styled.ts";

type RestaurantCardListProps = {
    restaurants: RestaurantType[],
}

export default function RestaurantCardList({restaurants}: RestaurantCardListProps) {
    return (
        <StyledUnorderedList>
            {restaurants.map(restaurant => {
                return (
                    <li>
                        <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
                    </li>
                )
            })}
        </StyledUnorderedList>
    )
}