import Logo from "../Logo/Logo.tsx";
import {StyledHeader} from "./Header.styled.ts";
import ActionMenu from "../ActionMenu/ActionMenu.tsx";
import {Link} from "react-router-dom";

export default function Header() {

    return (
        <StyledHeader>
            <Link to="/">
                <Logo/>
            </Link>
            <Link to="/restaurants/add">
                <ActionMenu/>
            </Link>
        </StyledHeader>
    )
}