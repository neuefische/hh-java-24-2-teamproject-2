import { ReactNode } from "react";
import { StyledLink } from "./ButtonLink.styled.ts";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
};

export default function ButtonLink({
  children,
  href,
}: Readonly<ButtonLinkProps>) {
  return <StyledLink to={href}>{children}</StyledLink>;
}
