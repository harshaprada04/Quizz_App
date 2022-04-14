import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SubmitHandler from "./SubmitHandler";

let AddRouting = () => {
  return (
    <BrowserRouter>
      <SubmitHandler />
    </BrowserRouter>
  );
};

it("Page has a previous Page Button or not", () => {
  render(<AddRouting />);
  expect(screen.getByText(/previous Page/i)).toBeTruthy();
});
