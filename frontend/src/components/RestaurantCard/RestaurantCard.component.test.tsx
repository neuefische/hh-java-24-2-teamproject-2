import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "./RestaurantCard.tsx";
import { RestaurantType } from "../../model/Restaurant.ts";
import { MemoryRouter } from "react-router-dom";

test("RestaurantCard component displays title of the restaurant", () => {
  const restaurant: RestaurantType = {
    id: "1",
    title: "Don Carlos",
    city: "Berlin",
  };
  render(
    <MemoryRouter>
      <RestaurantCard restaurant={restaurant} />
    </MemoryRouter>
  );
  const restaurantTitle = screen.getByText(/Don Carlos/i);
  expect(restaurantTitle).toBeInTheDocument();
});

test("RestaurantCard component displays the title of the restaurant as h2", () => {
  const restaurant: RestaurantType = {
    id: "1",
    title: "Don Carlos",
    city: "Berlin",
  };
  render(
    <MemoryRouter>
      <RestaurantCard restaurant={restaurant} />
    </MemoryRouter>
  );
  const restaurantTitle = screen.getByRole("heading", {
    level: 2,
    name: /don carlos/i,
  });
  expect(restaurantTitle).toBeInTheDocument();
});

test("RestaurantCard component displays the city", () => {
  const restaurant: RestaurantType = {
    id: "1",
    title: "Don Carlos",
    city: "Berlin",
  };
  render(
    <MemoryRouter>
      <RestaurantCard restaurant={restaurant} />
    </MemoryRouter>
  );
  const restaurantCity = screen.getByText(/Berlin/i);
  expect(restaurantCity).toBeInTheDocument();
});
