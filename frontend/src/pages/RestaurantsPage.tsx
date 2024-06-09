import { useRestaurants } from "../data/restaurantData.ts";
import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import AlertBox from "../components/AlertBox/AlertBox.tsx";
import CreateDataInvitation from "../components/CreateDataInvitation/CreateDataInvitation.tsx";
import RestaurantCardList from "../components/RestaurantCardList/RestaurantCardList.tsx";

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
        <AlertBox>{isError.message}</AlertBox>
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
