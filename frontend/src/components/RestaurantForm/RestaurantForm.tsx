import {ChangeEvent, FormEvent, useState} from "react";
import {NewRestaurantDTOType} from "../../model/Restaurant.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {StyledForm, StyledFormBody, StyledFormRow, StyledInputField} from "./RestaurantForm.styled.ts";

export default function RestaurantForm() {

    const [formData, setFormData] = useState<NewRestaurantDTOType>({title: "", city: ""});
    const navigate = useNavigate();

    function handleUserInput(event: ChangeEvent<HTMLInputElement>) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    function handleAddRestaurant(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("/api/restaurants", formData)
            .then(() => {
                navigate("/")
            })
            .catch((error) => {
                window.console.error(error.message)
            })
    }

    return (
        <StyledForm onSubmit={handleAddRestaurant}>
            <StyledFormBody>
                <StyledFormRow>
                    <label htmlFor="title">Title</label>
                    <StyledInputField
                        id="title"
                        name="title"
                        onChange={handleUserInput}
                        value={formData.title}
                        required
                    />
                </StyledFormRow>
                <StyledFormRow>
                    <label htmlFor="city">City</label>
                    <StyledInputField
                        id="city"
                        name="city"
                        onChange={handleUserInput}
                        value={formData.city}
                        required
                    />
                </StyledFormRow>
            </StyledFormBody>
            <button type="submit">Add</button>
        </StyledForm>
    )
}