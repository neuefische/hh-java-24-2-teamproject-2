import { useNavigate, useParams } from "react-router-dom";
import { NewRestaurantDTOType } from "../model/Restaurant.ts";
import axios from "axios";
import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import RestaurantForm from "../components/RestaurantForm/RestaurantForm.tsx";
import { logtail } from "../logger.ts";
import { useRestaurant } from "../data/restaurantData.ts";
import AlertBox from "../components/AlertBox/AlertBox.tsx";

export default function UpdateRestaurantPage() {
  const navigate = useNavigate();
  const { id: paramId } = useParams<{ id: string }>();
  const id = paramId ?? "";
  const { restaurant, isLoading, isError } = useRestaurant(id);

  if (isLoading) {
    return (
      <DefaultPageTemplate pageTitle="Loading">
        <p>Restaurant is currently loading. Please wait.</p>
      </DefaultPageTemplate>
    );
  }

  if (isError) {
    return (
      <DefaultPageTemplate pageTitle="Error">
        <p>
          Sorry, we encountered an error loading the restaurants. Please try
          again later.
        </p>
        <AlertBox>{isError.message}</AlertBox>
      </DefaultPageTemplate>
    );
  }

  if (!restaurant) {
    logtail.error(`There was an error displaying restaurant with ID ${id}`);
    return <DefaultPageTemplate>Error</DefaultPageTemplate>;
  }

  function handleEditRestaurant(formData: NewRestaurantDTOType) {
    logtail.info("Trying to update data for restaurant with ID " + id);

    axios
      .put(`/api/restaurants/${id}`, formData)
      .then(() => {
        logtail.info("Updated data of restaurant with ID " + id);
        navigate("/");
      })
      .catch((error) => {
        logtail.error(error.message, {
          error: error,
        });
        window.console.error(error.message);
      });
  }

  return (
    <DefaultPageTemplate pageTitle="Edit restaurant">
      <RestaurantForm
        onSubmit={handleEditRestaurant}
        restaurantData={restaurant}
      />
    </DefaultPageTemplate>
  );
}
