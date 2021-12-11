import React, { useState, useEffect } from "react";
import { searchCryptoList } from "../../utils/API";
import ShowList from "../SearchCrypto/ShowList";
import Loader from "react-loader-spinner";
import _ from "lodash";
import "../../styles/filterCryptos.css";

const FilterCryptosBody = (props) => {
  console.log("props from filter crypto body is ", props);
  const [searchInput, setSearchInput] = useState("");
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const hideLoader = () => {
    setLoading(false);
  };

  const showLoader = () => {
    setLoading(true);
  };

  const getData = async () => {
    showLoader();

    try {
      const response = await searchCryptoList(1);
      setLoading(false);
      hideLoader();
      console.log(response.data);
      setCryptos(response.data);

      if (response.status !== 200) {
        setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filteredListAll = cryptos.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="search-container">
        <input
          name="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          size="lg"
          data-testid="input-element"
          placeholder="Search for a Crypto"
          className="search-input"
        />
      </div>
      <div className="result-container">
        <ShowList
          loading={loading}
          setLoading={setLoading}
          filteredList={filteredListAll}
        />
      </div>
    </div>
  );
};

export default FilterCryptosBody;
