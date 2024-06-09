import useSWR from "swr";
import { RestaurantType } from "../model/Restaurant.ts";
import axios from "axios";
import { logtail } from "../logger.ts";

const fetcher = (url: string) => {
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
};

export function useRestaurants() {
  const { data, error, isLoading } = useSWR<RestaurantType[]>(
    "/api/restaurants",
    fetcher
  );

  return {
    restaurants: data,
    isLoading,
    isError: error,
  };
}
