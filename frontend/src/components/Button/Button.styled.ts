import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
    display: inline-block;
    padding: 10px 20px;
    color: white;
    background-color: #6200ea;
    text-decoration: none;    
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
        background-color: #3700b3;
    }

    &:active {
        background-color: #03dac5;
    }
`;