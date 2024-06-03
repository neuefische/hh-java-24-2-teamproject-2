import styled from "styled-components";

export default function RestaurantForm() {

    const StyledFormRow = styled.div`
        display: flex;
        flex-direction: column;
        gap: 5px;
    `;

    const StyledInputField = styled.input`
        border-radius: 4px;
        padding: 2px 5px;
    `;

    return (
        <form>
            <StyledFormRow>
                <label htmlFor="title">Title</label>
                <StyledInputField id="title" name="title" />
            </StyledFormRow>
        </form>
    )
}