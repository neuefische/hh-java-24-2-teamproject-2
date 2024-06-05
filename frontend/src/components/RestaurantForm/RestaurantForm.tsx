import { ChangeEvent, FormEvent, useState } from "react";
import { NewRestaurantDTOType } from "../../model/Restaurant.ts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  StyledFieldError,
  StyledForm,
  StyledFormBody,
  StyledFormRow,
  StyledInputField,
} from "./RestaurantForm.styled.ts";

export default function RestaurantForm() {
  const initialFieldValidation = {
    title: "",
    city: "",
  };

  const [formData, setFormData] = useState<NewRestaurantDTOType>({
    title: "",
    city: "",
  });
  const [fieldValidation, setFieldValidation] = useState<NewRestaurantDTOType>(
    initialFieldValidation
  );
  const navigate = useNavigate();

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

  function handleAddRestaurant(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post("/api/restaurants", formData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        window.console.error(error.message);
      });
  }

  return (
    <StyledForm onSubmit={handleAddRestaurant}>
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
      <button type="submit">Add</button>
    </StyledForm>
  );
}
