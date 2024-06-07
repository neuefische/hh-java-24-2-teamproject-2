import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import axios from "axios";
import { RestaurantType } from "../model/Restaurant.ts";

import Button from "../components/Button/Button.tsx";
import ButtonLink from "../components/ButtonLink/ButtonLink.tsx";
import { logtail } from "../logger.ts";

export default function RestaurantDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<RestaurantType>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    logtail.info("Trying to receive data for restaurant with ID " + id);

    axios
      .get(`/api/restaurants/${id}`)
      .then((response) => {
        logtail.info("Received data of restaurant with ID " + id);
        setRestaurant(response.data);
      })
      .catch((error) => {
        logtail.error(error.message, {
          error: error,
        });
        setError("There was an error fetching the restaurant details!");
        console.error(error);
      });
  }, [id]);

  if (error) {
    return <DefaultPageTemplate>{error}</DefaultPageTemplate>;
  }

  if (!restaurant) {
    return <DefaultPageTemplate>Loading...</DefaultPageTemplate>;
  }

  function deleteRestaurantById() {
    axios.delete(`/api/restaurants/${id}`).then(() => navigate("/"));
  }

  return (
    <DefaultPageTemplate pageTitle={restaurant.title}>
      <p>{restaurant.city}</p>
      <ButtonLink href={`/restaurants/edit/${id}`}>Edit</ButtonLink>
      <ButtonLink href="/">Back</ButtonLink>
      <Button buttonType="delete" handleOnClick={deleteRestaurantById}>
        Delete
      </Button>
    </DefaultPageTemplate>
  );
}
