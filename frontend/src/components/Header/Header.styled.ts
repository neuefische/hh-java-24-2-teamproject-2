import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: var(--header-height);
  border-bottom: 1px solid var(--default-border-color);
  border-radius: 0 0 var(--default-border-radius) var(--default-border-radius);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 999;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
