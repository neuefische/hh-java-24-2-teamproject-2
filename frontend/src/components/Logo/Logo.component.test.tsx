import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./Logo.tsx";

test("Button component renders a button", () => {
  render(<Logo />);
  const button = screen.getByText(/restaurantapp/i);
  expect(button).toBeInTheDocument();
});
