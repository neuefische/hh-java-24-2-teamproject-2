import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonLink from "./ButtonLink.tsx";
import { MemoryRouter } from "react-router-dom";

test("ButtonLink component renders a link", () => {
  render(
    <MemoryRouter>
      <ButtonLink href="/my-url">Click here</ButtonLink>
    </MemoryRouter>
  );
  const button = screen.getByRole("link");
  expect(button).toBeInTheDocument();
});

test("ButtonLink component links to the correct target", () => {
  render(
    <MemoryRouter>
      <ButtonLink href="/my-url">Click here</ButtonLink>
    </MemoryRouter>
  );
  const button = screen.getByRole("link");
  expect(button).toHaveAttribute("href", "/my-url");
});

test("ButtonLink component renders children as text", () => {
  render(
    <MemoryRouter>
      <ButtonLink href="/my-url">Click here</ButtonLink>
    </MemoryRouter>
  );
  const text = screen.getByText(/click here/i);
  expect(text).toBeInTheDocument();
});
