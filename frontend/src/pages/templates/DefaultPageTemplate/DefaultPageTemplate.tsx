import React from "react";
import Header from "../../../components/Header/Header.tsx";
import { StyledHeading, StyledMain } from "./DefaultPageTemplate.styled.ts";

type DefaultPageTemplateProps = {
  children?: React.ReactNode;
  pageTitle?: string;
};

export default function DefaultPageTemplate({
  children,
  pageTitle,
}: Readonly<DefaultPageTemplateProps>) {
  return (
    <>
      <Header />
      <StyledMain>
        {pageTitle && <StyledHeading>{pageTitle}</StyledHeading>}
        {children}
      </StyledMain>
    </>
  );
}
