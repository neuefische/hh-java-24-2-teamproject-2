import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantForm from "./RestaurantForm.tsx";
import { MemoryRouter } from "react-router-dom";
import { NewRestaurantDTOType } from "../../model/Restaurant.ts";

const initialFormData: NewRestaurantDTOType = { title: "", city: "" };

test('RestaurantForm component displays label "title"', () => {
  render(
    <MemoryRouter>
      <RestaurantForm
        onSubmit={jest.fn()}
        initialFormData={initialFormData}
        buttonText="Create"
      />
    </MemoryRouter>
  );
  const titleInput = screen.getByLabelText("Title");
  expect(titleInput).toBeInTheDocument();
});

test('RestaurantForm component displays input field "title"', () => {
  render(
    <MemoryRouter>
      <RestaurantForm
        onSubmit={jest.fn()}
        initialFormData={initialFormData}
        buttonText="Create"
      />
    </MemoryRouter>
  );
  const titleInput = screen.getByRole("textbox", {
    name: /title/i,
  });
  expect(titleInput).toBeInTheDocument();
});

test('RestaurantForm component displays label "city"', () => {
  render(
    <MemoryRouter>
      <RestaurantForm
        onSubmit={jest.fn()}
        initialFormData={initialFormData}
        buttonText="Create"
      />
    </MemoryRouter>
  );
  const titleLabel = screen.getByLabelText("City");
  expect(titleLabel).toBeInTheDocument();
});

test('RestaurantForm component displays input field "city"', () => {
  render(
    <MemoryRouter>
      <RestaurantForm
        onSubmit={jest.fn()}
        initialFormData={initialFormData}
        buttonText="Create"
      />
    </MemoryRouter>
  );
  const cityInput = screen.getByRole("textbox", {
    name: /city/i,
  });
  expect(cityInput).toBeInTheDocument();
});

test('RestaurantForm component displays "create" button', () => {
  render(
    <MemoryRouter>
      <RestaurantForm
        onSubmit={jest.fn()}
        initialFormData={initialFormData}
        buttonText="Create"
      />
    </MemoryRouter>
  );
  const saveButton = screen.getByRole("button", {
    name: /create/i,
  });
  expect(saveButton).toBeInTheDocument();
});

test('RestaurantForm component displays "create" button', () => {
  render(
    <MemoryRouter>
      <RestaurantForm
        onSubmit={jest.fn()}
        initialFormData={initialFormData}
        buttonText="Update"
      />
    </MemoryRouter>
  );
  const saveButton = screen.getByRole("button", {
    name: /update/i,
  });
  expect(saveButton).toBeInTheDocument();
});
