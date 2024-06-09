import RestaurantCard from "../RestaurantCard/RestaurantCard.tsx";
import { RestaurantType } from "../../model/Restaurant.ts";
import { StyledUnorderedList } from "./RestaurantCardList.styled.ts";

type RestaurantCardListProps = {
  restaurants: RestaurantType[];
};

export default function RestaurantCardList({
  restaurants,
}: Readonly<RestaurantCardListProps>) {
  return (
    <StyledUnorderedList>
      {restaurants.map((restaurant) => {
        return (
          <li key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </li>
        );
      })}
    </StyledUnorderedList>
  );
}
