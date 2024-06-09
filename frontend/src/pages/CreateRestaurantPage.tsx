import DefaultPageTemplate from "./templates/DefaultPageTemplate/DefaultPageTemplate.tsx";
import RestaurantForm from "../components/RestaurantForm/RestaurantForm.tsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NewRestaurantDTOType, RestaurantType } from "../model/Restaurant.ts";
import { logtail } from "../logger.ts";
import { mutate } from "swr";

export default function CreateRestaurantPage() {
  const navigate = useNavigate();

  function handleAddRestaurant(formData: NewRestaurantDTOType) {
    logtail.info("Trying to create a new restaurant record");

    axios
      .post("/api/restaurants", formData)
      .then((response) => {
        const savedRestaurant: RestaurantType = response.data;
        logtail.info("Created new restaurant with ID " + savedRestaurant.id);
        mutate("/api/restaurants");
        navigate("/restaurants/" + savedRestaurant.id);
      })
      .catch((error) => {
        logtail.error(error.message, {
          error: error,
        });
        window.console.error(error.message);
      });
  }

  return (
    <DefaultPageTemplate pageTitle="New restaurant">
      <RestaurantForm
        onSubmit={handleAddRestaurant}
        initialFormData={{ title: "", city: "" }}
      />
    </DefaultPageTemplate>
  );
}
