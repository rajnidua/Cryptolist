import { render, screen, fireEvent, shallow } from "@testing-library/react";
import SearchCryptoBody from "../components/SearchCrypto/SearchCryptoBody";
import cryptoPageNum from "../components/SearchCrypto/SearchCryptoBody";

describe("<SearchCryptoBody />", () => {
  test("display counter text", () => {
    render(<SearchCryptoBody />);
  });
});
