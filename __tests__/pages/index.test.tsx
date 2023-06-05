import { render, screen, fireEvent } from "@testing-library/react";

import Home from "@/app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /My Todo List App/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

test("input value is updated correctly", () => {
  render(<Home />);

  const input = screen.getByPlaceholderText("Add Todo") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "Test Todo" } });

  expect(input.value).toBe("Test Todo");
});

