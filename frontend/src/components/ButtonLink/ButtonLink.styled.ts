import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: var(--primary-color);
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: color-mix(in srgb, var(--primary-color) 80%, white);
  }

  &:active {
    background-color: color-mix(in srgb, var(--primary-color) 70%, black);
  }
`;
