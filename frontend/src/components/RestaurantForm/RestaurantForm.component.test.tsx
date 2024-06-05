import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import RestaurantForm from "./RestaurantForm.tsx";
import {MemoryRouter} from "react-router-dom";

test('RestaurantForm component displays label "title"', () => {
    render(
        <MemoryRouter>
            <RestaurantForm  onSubmit={jest.fn()} restaurantData={null}/>
        </MemoryRouter>);
    const titleInput = screen.getByLabelText("Title");
    expect(titleInput).toBeInTheDocument();
});

test('RestaurantForm component displays input field "title"', () => {
    render(
        <MemoryRouter>
            <RestaurantForm  onSubmit={jest.fn()} restaurantData={null}/>
        </MemoryRouter>);
    const titleInput = screen.getByRole("textbox", {
        name: /title/i
    });
    expect(titleInput).toBeInTheDocument();
});

test('RestaurantForm component displays label "city"', () => {
    render(
        <MemoryRouter>
            <RestaurantForm  onSubmit={jest.fn()} restaurantData={null}/>
        </MemoryRouter>);
    const titleLabel = screen.getByLabelText("City");
    expect(titleLabel).toBeInTheDocument();
});

test('RestaurantForm component displays input field "city"', () => {
    render(
        <MemoryRouter>
            <RestaurantForm  onSubmit={jest.fn()} restaurantData={null}/>
        </MemoryRouter>);
    const cityInput = screen.getByRole("textbox", {
        name: /city/i
    });
    expect(cityInput).toBeInTheDocument();
});

test('RestaurantForm component displays "save" button', () => {
    render(
        <MemoryRouter>
            <RestaurantForm  onSubmit={jest.fn()} restaurantData={null}/>
        </MemoryRouter>);
    const saveButton = screen.getByRole("button", {
        name: /save/i
    });
    expect(saveButton).toBeInTheDocument();
});

