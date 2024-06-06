import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NewRestaurantDTOType, RestaurantType } from "../model/Restaurant.ts";
import axios from "axios";
import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import RestaurantForm from "../components/RestaurantForm/RestaurantForm.tsx";
import { logtail } from "../logger.ts";

export default function RestaurantEditPage() {
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
