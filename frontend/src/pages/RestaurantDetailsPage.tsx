import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import axios from "axios";
import { RestaurantType } from "../model/Restaurant.ts";

import Button from "../components/Button/Button.tsx";

export default function RestaurantDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<RestaurantType>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`/api/restaurants/${id}`)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => {
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

  return (
    <DefaultPageTemplate pageTitle={restaurant.title}>
      <p>{restaurant.city}</p>
      <Button href={`/restaurants/edit/${id}`}>Edit</Button>
      <Button href="/">Back</Button>
    </DefaultPageTemplate>
  );
}
