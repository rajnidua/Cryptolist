import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchCryptoBody from "../components/SearchCrypto/SearchCryptoBody";

describe("<SearchCryptoBody  />", () => {
  test("render text input", () => {
    render(<SearchCryptoBody />);

    const inputEl = screen.getByTestId("input-element");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("pass valid text to test text input field", () => {
    render(<SearchCryptoBody />);

    const inputEl = screen.getByTestId("input-element");
    userEvent.type(inputEl, "Bitcoin");

    expect(screen.getByTestId("input-element")).toHaveValue("Bitcoin");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
});
