import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { searchCryptoList } from "../../utils/API";
import ShowList from "./ShowList";
import _ from "lodash";
import Pagination from "../Pagination";
import { Paginate } from "../../utils/Paginate";

const SearchCryptoBody = () => {
  const [cryptos, setCryptos] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState("loading");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };
  const handlePageChange = (page) => {
    console.log("the page change value is: ", page);
    setCurrentPage(page);
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
  const cryptosLength = Object.keys(cryptos).length;

  const filteredList = searchInput
    ? cryptos.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchInput.toLowerCase())
      )
    : cryptos;

  const cryptoPaginate = Paginate(filteredList, currentPage, pageSize);

  /* const filteredList = cryptos.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchInput.toLowerCase())
  ); */

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

      <div>
        <ShowList
          loading={loading}
          setLoading={setLoading}
          filteredList={cryptoPaginate}
        />
        <Pagination
          itemsCount={cryptosLength}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      {/* {searchInput ? (
        <ShowList
          loading={loading}
          setLoading={setLoading}
          filteredList={filteredList}
        />
      ) : (
        <div>
          <ShowList
            loading={loading}
            setLoading={setLoading}
            filteredList={cryptos}
          />
          <Pagination
            itemsCount={cryptosLength}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )} */}
    </div>
  );
};

export default SearchCryptoBody;
