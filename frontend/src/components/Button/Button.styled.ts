import styled from "styled-components";

export const StyledButton = styled.button<{ $buttonType?: string }>`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: ${(props) =>
    props.$buttonType === "delete"
      ? "var(--delete-color)"
      : "var(--default-color)"};
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
