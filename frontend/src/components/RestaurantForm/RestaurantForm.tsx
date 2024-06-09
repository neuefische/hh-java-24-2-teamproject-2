import { ChangeEvent, useState } from "react";
import { NewRestaurantDTOType } from "../../model/Restaurant.ts";
import {
  StyledFieldError,
  StyledForm,
  StyledFormBody,
  StyledFormRow,
  StyledInputField,
} from "./RestaurantForm.styled.ts";
import _ from "lodash";

type RestaurantFormProps = {
  onSubmit: (rg0: NewRestaurantDTOType) => void;
  initialFormData: NewRestaurantDTOType;
  buttonText: "Create" | "Update";
};

export default function RestaurantForm({
  onSubmit,
  initialFormData,
  buttonText,
}: Readonly<RestaurantFormProps>) {
  const initialFieldValidation = {
    title: "",
    city: "",
  };

  const [formData, setFormData] =
    useState<NewRestaurantDTOType>(initialFormData);
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

  const hasInputChanges = _.isEqual(formData, initialFormData);
  const hasValidationErrors = _.isEqual(
    fieldValidation,
    initialFieldValidation
  );

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
            autoFocus
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
      <button type="submit" disabled={hasInputChanges || !hasValidationErrors}>
        {buttonText}
      </button>
    </StyledForm>
  );
}
