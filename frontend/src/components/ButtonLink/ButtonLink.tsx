import { ReactNode } from "react";
import { StyledLink } from "./Link.styled.ts";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
};

export default function ButtonLink({ children, href }: ButtonLinkProps) {
  return <StyledLink to={href}>{children}</StyledLink>;
}