import { ReactNode } from "react";
import { StyledButton } from "./Button.styled.ts";

type ButtonProps = {
  children: ReactNode;
  handleOnClick: () => void;
  buttonType: "default" | "delete";
};

export default function Button({
  children,
  handleOnClick,
  buttonType,
}: ButtonProps) {
  return (
    <StyledButton $buttonType={buttonType} onClick={handleOnClick}>
      {children}
    </StyledButton>
  );
}
