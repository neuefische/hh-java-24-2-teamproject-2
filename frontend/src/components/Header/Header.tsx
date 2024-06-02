import Logo from "../Logo/Logo.tsx";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid lightgray;
    border-radius: 10px;
`;

export default function Header() {

    return (
        <StyledHeader>
            <Logo />
        </StyledHeader>

    )
}