import { ReactNode } from "react";
import { StyledButton } from "./Button.styled.ts";

export type ButtonProps = {
  children: ReactNode;
  handleOnClick: () => void;
  buttonType: ButtonTypeTypes;
};

export type ButtonTypeTypes = "default" | "delete";

export default function Button({
  children,
  handleOnClick,
  buttonType,
}: Readonly<ButtonProps>) {
  return (
    <StyledButton $buttonType={buttonType} onClick={handleOnClick}>
      {children}
    </StyledButton>
  );
}
