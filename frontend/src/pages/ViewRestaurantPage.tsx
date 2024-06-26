import { useNavigate, useParams } from "react-router-dom";
import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import axios from "axios";

import Button from "../components/Button/Button.tsx";
import ButtonLink from "../components/ButtonLink/ButtonLink.tsx";
import { useRestaurant } from "../data/restaurantData.ts";
import { logtail } from "../logger.ts";
import AlertBox from "../components/AlertBox/AlertBox.tsx";
import { mutate } from "swr";
import { RestaurantType } from "../model/Restaurant.ts";

export default function ViewRestaurantPage() {
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

  function deleteRestaurantById(id: string, restaurant: RestaurantType) {
    const isConfirmed = confirm(
      `Do you really want to delete "${restaurant.title}"?`
    );

    if (!isConfirmed) {
      return;
    }

    logtail.info(`Trying to delete data for restaurant with ID ${id}`);

    axios
      .delete(`/api/restaurants/${id}`)
      .then(() => {
        logtail.info(`Deleted data of restaurant with ID ${id}`);
        mutate("/api/restaurants");
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
    <DefaultPageTemplate pageTitle={restaurant.title}>
      <p>{restaurant.city}</p>
      <ButtonLink href={`/restaurants/edit/${id}`}>Edit</ButtonLink>
      <ButtonLink href="/">Back</ButtonLink>
      <Button
        buttonType="delete"
        handleOnClick={() => deleteRestaurantById(id, restaurant)}
      >
        Delete
      </Button>
    </DefaultPageTemplate>
  );
}
