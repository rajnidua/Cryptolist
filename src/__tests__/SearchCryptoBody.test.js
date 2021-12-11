import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterCryptosBody from "../components/FilterCryptos/FilterCryptosBody";

describe("<FilterCryptosBody  />", () => {
  test("render text input", () => {
    render(<FilterCryptosBody />);

    const inputEl = screen.getByTestId("input-element");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("pass valid text to test text input field", () => {
    render(<FilterCryptosBody />);

    const inputEl = screen.getByTestId("input-element");
    userEvent.type(inputEl, "Bitcoin");

    expect(screen.getByTestId("input-element")).toHaveValue("Bitcoin");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
});
