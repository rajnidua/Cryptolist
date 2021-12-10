import { render, screen, fireEvent, shallow } from "@testing-library/react";
import SearchCryptoBody from "../components/SearchCrypto/SearchCryptoBody";
import cryptoPageNum from "../components/SearchCrypto/SearchCryptoBody";

describe("<SearchCryptoBody />", () => {
  test("display counter text", () => {
    render(<SearchCryptoBody />);

    //expect(screen.getByTestId("counter-text")).toHaveTextContent("0");
  });

  /*  test("increment counter", () => {
    render(<SearchCryptoBody />);

    const btnFirstPage = screen.getByTestId("first-page");
    fireEvent.click(btnFirstPage);
    const cryptoPageNum = shallow(<SearchCryptoBody />);
    // loginComponent.setState({ error: true });
    expect(cryptoPageNum).toBe(1);
  }); */

  /*  test("decrement counter", () => {
    render(<App />);

    const btnDecrement = screen.getByTestId("next-page");
    fireEvent.click(btnDecrement);

    expect(screen.getByTestId("counter-text")).toHaveTextContent("-1");
  }); */
});
