import RestaurantCardList from "../../components/RestaurantCardList/RestaurantCardList.tsx";
import DefaultPageTemplate from "../templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { RestaurantType } from "../../model/Restaurant.ts";
import CreateDataInvitation from "../../components/CreateDataInvitation/CreateDataInvitation.tsx";
import { StyledErrorParagraph } from "./RestaurantsPage.styled.ts";
import { logtail } from "../../logger.ts";

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    logtail.info("Trying to receive all restaurants from /api/restaurants");

    axios
      .get("/api/restaurants")
      .then((response) => {
        logtail.info("Received " + response.data.length + " restaurants");
        setRestaurants(response.data);
      })
      .catch((error) => {
        logtail.error(error.message, {
          error: error,
        });
        setError(error);
        console.error(error.message);
      });
  }, []);

  if (error) {
    return (
      <DefaultPageTemplate pageTitle="Restaurants">
        <p>
          Sorry, we encountered an error loading the restaurants. Please try
          again later.
        </p>
        <StyledErrorParagraph>{error.message}</StyledErrorParagraph>
      </DefaultPageTemplate>
    );
  }

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
