import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { searchCryptoList } from "../../utils/API";
import ShowList from "./ShowList";

const SearchCryptoBody = () => {
  const [cryptos, setCryptos] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState("loading");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  const getData = async () => {
    try {
      const response = await searchCryptoList();
      setLoading("not loading");
      console.log(response.data);
      setCryptos(response.data);

      if (response.status !== 200) {
        setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log("value of cryptos is: ", cryptos);
  //const filteredList = cryptos.filter((crypto) => crypto.name === "Bitcoin");
  const filteredList = cryptos.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  /* useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setcoins(res.data);
        console.log(coins);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); */

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <input
          name="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          size="lg"
          placeholder="Search for a Cryptolist"
        />
        <button style={{ cursor: "pointer" }} type="submit">
          Submit Search
        </button>
      </form>
      {searchInput ? (
        <ShowList
          loading={loading}
          setLoading={setLoading}
          filteredList={filteredList}
        />
      ) : (
        <ShowList
          loading={loading}
          setLoading={setLoading}
          filteredList={cryptos}
        />
      )}
    </div>
  );
};

export default SearchCryptoBody;
