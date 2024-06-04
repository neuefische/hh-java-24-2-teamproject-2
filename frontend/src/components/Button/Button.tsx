import {ReactNode} from "react";
import {StyledLink} from "./Button.styled.ts";

type ButtonProps = {
    children: ReactNode,
    href: string,
}

export default function Button({children, href}: ButtonProps) {
    return (
        <>
            <StyledLink to={href}>
                {children}
            </StyledLink>
        </>
    )
}