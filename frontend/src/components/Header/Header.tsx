import Logo from "../Logo/Logo.tsx";
import { StyledHeader, StyledLink } from "./Header.styled.ts";
import ActionMenu from "../ActionMenu/ActionMenu.tsx";
import ProfileLink from "../ProfileLink/ProfileLink.tsx";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLink to="/profile">
        <ProfileLink />
      </StyledLink>

      <StyledLink to="/">
        <Logo />
      </StyledLink>
      <StyledLink to="/restaurants/add">
        <ActionMenu />
      </StyledLink>
    </StyledHeader>
  );
}
