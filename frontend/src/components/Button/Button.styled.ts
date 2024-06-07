import styled from "styled-components";
import { ButtonTypeTypes } from "./Button.tsx";

const getBackgroundColor = {
  default: "var(--default-color",
  delete: "var(--delete-color)",
};

export const StyledButton = styled.button<{ $buttonType: ButtonTypeTypes }>`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: ${(props) => getBackgroundColor[props.$buttonType]};

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
