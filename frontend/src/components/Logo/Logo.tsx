import styled from "styled-components";

const StyledLogo = styled.span`
    font-size: 2rem;
    font-weight: lighter;
    font-stretch: expanded;
`;

export default function Logo() {
    return (
        <StyledLogo>RestaurantApp</StyledLogo>
    )
}