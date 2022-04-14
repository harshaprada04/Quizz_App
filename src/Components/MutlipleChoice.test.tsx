import { fireEvent, getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "./HomePage";
import "@testing-library/jest-dom/extend-expect";

test("Option Selection", () => {
  const { getByTestId } = render(
    <div>
      <input data-testid="val1" type="radio" id="html" value="Delhi"></input>
      <label> Delhi</label>
      <input
        data-testid="val2"
        type="radio"
        id="html"
        value="Bangalore"
      ></input>
      <label>Bangalore</label>
      <input data-testid="val3" type="radio" id="html" value="Mumbai"></input>
      <label>Mumbai</label>
    </div>
  );
  expect(
    fireEvent.change(screen.getByTestId("val1"), { target: { value: "Delhi" } })
  ).toBe(true);
});
