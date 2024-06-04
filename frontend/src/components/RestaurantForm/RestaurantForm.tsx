import styled from "styled-components";
import {ChangeEvent, FormEvent, useState} from "react";
import {NewRestaurantDTOType} from "../../model/Restaurant.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const StyledFormRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const StyledInputField = styled.input`
    border-radius: 4px;
    padding: 2px 5px;
`;

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
            <button type="submit">Add</button>
        </StyledForm>
    )
}