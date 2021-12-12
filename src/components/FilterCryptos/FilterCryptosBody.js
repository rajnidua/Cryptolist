import React, { useState, useEffect } from "react";
import { filterCryptoList } from "../../utils/API";
import ShowList from "../SearchCrypto/ShowList";
import Loader from "react-loader-spinner";
import _ from "lodash";
import "../../styles/filterCryptos.css";
import {
  faAddressBook,
  faAngleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterCryptosBody = (props) => {
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
      const response = await filterCryptoList(1);
      setLoading(false);
      hideLoader();

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
        <FontAwesomeIcon icon={faSearch} />
        <input
          name="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          size="lg"
          data-testid="input-element"
          placeholder="Search"
          className="search-input"
        />
      </div>
      <div className="result-container">
        {loading ? (
          <div className="show-loader">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        ) : (
          <ShowList
            loading={loading}
            setLoading={setLoading}
            filteredList={filteredListAll}
          />
        )}
      </div>
    </div>
  );
};

export default FilterCryptosBody;
