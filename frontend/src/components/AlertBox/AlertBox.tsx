import { StyledErrorContainer } from "./AlertBox.styled.ts";
import { ReactNode } from "react";

type AlertBoxProps = {
  children: ReactNode;
};

export default function AlertBox({ children }: Readonly<AlertBoxProps>) {
  return <StyledErrorContainer>{children}</StyledErrorContainer>;
}
