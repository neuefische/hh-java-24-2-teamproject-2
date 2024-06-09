import useSWR from "swr";
import { RestaurantType } from "../model/Restaurant.ts";
import axios from "axios";
import { logtail } from "../logger.ts";

export function useRestaurants() {
  const { data, error, isLoading } = useSWR<RestaurantType[]>(
    "/api/restaurants",
    (url: string) => {
      logtail.info(`Trying to receive all restaurants from ${url}`);

      return axios
        .get(url)
        .then((response) => {
          logtail.info("Received " + response.data.length + " restaurants");
          return response.data;
        })
        .catch((error) => {
          logtail.error(error.message, {
            error: error,
          });
          throw error;
        });
    }
  );

  return {
    restaurants: data,
    isLoading,
    isError: error,
  };
}

export function useRestaurant(id: string) {
  if (!id) {
    throw new Error("Restaurant ID is required!");
  }

  const { data, error, isLoading } = useSWR<RestaurantType>(
    `/api/restaurants/${id}`,
    (url: string) => {
      logtail.info(`Trying to receive restaurant from ${url}`);

      return axios
        .get(url)
        .then((response) => {
          logtail.info(`Received restaurant with ID ${response.data.id}`);
          return response.data;
        })
        .catch((error) => {
          logtail.error(error.message, {
            error: error,
          });
          throw error;
        });
    }
  );

  return {
    restaurant: data,
    isLoading,
    isError: error,
  };
}
