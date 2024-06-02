import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import RestaurantCard from "./RestaurantCard.tsx";
import {RestaurantType} from "../../model/Restaurant.ts";

test('RestaurantCard component displays title of the restaurant', () => {
    const restaurant: RestaurantType = {id: "1", title: "Don Carlos", city: "Berlin"}
    const {getByText} = render(<RestaurantCard restaurant={restaurant}/>);
    const restaurantTitle = getByText(/Don Carlos/i);
    expect(restaurantTitle).toBeInTheDocument();
});