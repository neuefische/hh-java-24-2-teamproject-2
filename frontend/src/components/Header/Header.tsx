import Logo from "../Logo/Logo.tsx";
import { StyledHeader, StyledLink } from "./Header.styled.ts";
import ActionMenu from "../ActionMenu/ActionMenu.tsx";
import ProfileLink from "../ProfileLink/ProfileLink.tsx";

export default function Header() {
  function login() {
    const host =
      window.location.host === "localhost:5173"
        ? "http://localhost:8080"
        : window.location.origin;

    window.open(host + "/oauth2/authorization/github", "_self");
  }

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
