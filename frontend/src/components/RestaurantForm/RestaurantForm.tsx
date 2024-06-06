import { ChangeEvent, useState } from "react";
import {
  NewRestaurantDTOType,
  RestaurantType,
} from "../../model/Restaurant.ts";
import {
  StyledFieldError,
  StyledForm,
  StyledFormBody,
  StyledFormRow,
  StyledInputField,
} from "./RestaurantForm.styled.ts";

type RestaurantFormProps = {
  restaurantData: RestaurantType | null;
  onSubmit: (rg0: NewRestaurantDTOType) => void;
};

export default function RestaurantForm({
  restaurantData,
  onSubmit,
}: RestaurantFormProps) {
  const initialFieldValidation = {
    title: "",
    city: "",
  };

  const [formData, setFormData] = useState<NewRestaurantDTOType>(
    restaurantData || { title: "", city: "" }
  );
  const [fieldValidation, setFieldValidation] = useState<NewRestaurantDTOType>(
    initialFieldValidation
  );

  function handleUserInput(event: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    if (event.target.value.trim() === "") {
      setFieldValidation({
        ...fieldValidation,
        [event.target.name]: "Field is required",
      });
    } else if (event.target.value.trim() !== "") {
      setFieldValidation({ ...fieldValidation, [event.target.name]: "" });
    }
  }

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formData);
      }}
    >
      <StyledFormBody>
        <StyledFormRow>
          <label htmlFor="title">Title</label>
          <StyledInputField
            id="title"
            name="title"
            type="text"
            onChange={handleUserInput}
            value={formData.title}
            required
          />
          <StyledFieldError>{fieldValidation.title}</StyledFieldError>
        </StyledFormRow>
        <StyledFormRow>
          <label htmlFor="city">City</label>
          <StyledInputField
            id="city"
            name="city"
            type="text"
            onChange={handleUserInput}
            value={formData.city}
            required
          />
          <StyledFieldError>{fieldValidation.city}</StyledFieldError>
        </StyledFormRow>
      </StyledFormBody>
      <button type="submit">Save</button>
    </StyledForm>
  );
}
