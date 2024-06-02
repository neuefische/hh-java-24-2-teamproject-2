import React from "react";
import Header from "../../components/Header/Header.tsx";
import styled from "styled-components";

type DefaultPageTemplateProps = {
    children?: React.ReactNode,
    pageTitle?: string,
}

const StyledMain = styled.main`
    margin: 20px 20px;
`;

export default function DefaultPageTemplate({children, pageTitle}: DefaultPageTemplateProps) {
    return (
        <>
            <Header />
            <StyledMain>
                {pageTitle && <h1>{pageTitle}</h1>}
                {children}
            </StyledMain>
        </>
    )
}