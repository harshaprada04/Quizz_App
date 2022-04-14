import { fireEvent, getByText, render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";

let AddRouting = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

it("Button is disabled or not", async () => {
  render(<AddRouting />);
  expect(
    await screen.getByRole("button", {
      name: /submit/i,
    })
  ).toBeDisabled();
});

test("Gender Selection", () => {
  const { getByTestId } = render(
    <select data-testid="Gender">
      <option data-testid="val1" value="Men">
        Men
      </option>
      <option data-testid="val2" value="Woman">
        Woman
      </option>
      <option data-testid="val3" value="New">
        New
      </option>
    </select>
  );
  expect(
    fireEvent.change(screen.getByTestId("val1"), { target: { value: "Men" } })
  ).toBe(true);
});

test("Language Selection", () => {
  const { getByTestId } = render(
    <select data-testid="Gender">
      <option data-testid="val1" value="English">
        English
      </option>
      <option data-testid="val2" value="Hindi">
        Hindi
      </option>
    </select>
  );
  expect(
    fireEvent.change(screen.getByTestId("val1"), {
      target: { value: "English" },
    })
  ).toBe(true);
});
