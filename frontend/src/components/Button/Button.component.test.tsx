import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button.tsx";

test("Button component renders a button", () => {
  render(
    <Button buttonType="delete" handleOnClick={() => {}}>
      Delete
    </Button>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Button component renders children as text", () => {
  render(
    <Button buttonType="delete" handleOnClick={() => {}}>
      Delete
    </Button>
  );
  const text = screen.getByText(/delete/i);
  expect(text).toBeInTheDocument();
});
