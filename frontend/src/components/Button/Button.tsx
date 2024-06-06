import { ReactNode } from "react";
import { StyledButton, StyledDeleteButton } from "./Button.styled.ts";

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
    <>
      {buttonType === "default" && (
        <StyledButton onClick={handleOnClick}>{children}</StyledButton>
      )}
      {buttonType === "delete" && (
        <StyledDeleteButton onClick={handleOnClick}>
          {children}
        </StyledDeleteButton>
      )}
    </>
  );
}
