import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: var(--default-color);
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: color-mix(in srgb, var(--default-color) 80%, white);
  }

  &:active {
    background-color: color-mix(in srgb, var(--default-color) 70%, black);
  }
`;

export const StyledDeleteButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: var(--delete-color);
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: color-mix(in srgb, var(--delete-color) 80%, white);
  }

  &:active {
    background-color: color-mix(in srgb, var(--delete-color) 70%, black);
  }
`;
