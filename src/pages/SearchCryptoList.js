import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchCryptoList = () => {
  const [coins, setcoins] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
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
  }, []);

  /*   useEffect(() => {
    if (error) {
      alert("There has been an error fetching the data");
    }
  }, [error]); */

  return <div> My first crypto!!!</div>;
};

export default SearchCryptoList;
