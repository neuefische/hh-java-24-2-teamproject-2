import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
    background-color: #6200ea;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        background-color: #3700b3;
    }

    &:active {
        background-color: #03dac5;
    }
`;