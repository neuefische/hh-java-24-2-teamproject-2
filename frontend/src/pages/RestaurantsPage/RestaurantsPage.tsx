import RestaurantCardList from "../../components/RestaurantCardList/RestaurantCardList.tsx";
import DefaultPageTemplate from "../templates/DefaultPageTemplate/DefaultPageTemplate.tsx";

import CreateDataInvitation from "../../components/CreateDataInvitation/CreateDataInvitation.tsx";
import { StyledErrorParagraph } from "./RestaurantsPage.styled.ts";
import { useRestaurants } from "../../data/restaurantData.ts";

export default function RestaurantsPage() {
  const { restaurants, isLoading, isError } = useRestaurants();

  if (isLoading) {
    return (
      <DefaultPageTemplate pageTitle="Restaurants">
        <p>Restaurants are currently loading. Please wait.</p>
      </DefaultPageTemplate>
    );
  }

  if (isError) {
    return (
      <DefaultPageTemplate pageTitle="Restaurants">
        <p>
          Sorry, we encountered an error loading the restaurants. Please try
          again later.
        </p>
        <StyledErrorParagraph>{isError.message}</StyledErrorParagraph>
      </DefaultPageTemplate>
    );
  }

  if (restaurants) {
    return (
      <DefaultPageTemplate pageTitle="Restaurants">
        {restaurants.length === 0 ? (
          <CreateDataInvitation />
        ) : (
          <RestaurantCardList restaurants={restaurants} />
        )}
      </DefaultPageTemplate>
    );
  }
}
