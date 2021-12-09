import axios from "axios";
import React, { useEffect, useState } from "react";
import { searchCryptoList } from "../../utils/API";
import ShowList from "./ShowList";

const SearchCryptoBody = () => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState("loading");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await searchCryptoList();
      setLoading("not loading");
      /* const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      ); */
      console.log(response);
      console.log(response.status);
      setCryptos(response.data);
      console.log("Cryptos new value is:  ", cryptos);

      if (response.status !== 200) {
        //throw new Error("something went wrong!");
        setError(true);
      }

      /* const { items } = await response.json();
      console.log(items); */
    } catch (err) {
      console.log(err);
    }
  };
  console.log("search input is " + searchInput);
  console.log(cryptos[0].name);
  //const filteredList = cryptos.filter((crypto) => crypto.name === "Bitcoin");
  const filteredList = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  console.log("filtered list is ", filteredList);

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
      <ShowList loading={loading} setLoading={setLoading} />
    </div>
  );
};

export default SearchCryptoBody;
