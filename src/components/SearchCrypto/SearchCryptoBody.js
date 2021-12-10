import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { searchCryptoList } from "../../utils/API";
import ShowList from "./ShowList";
import _ from "lodash";
import Pagination from "../Pagination";
import { Paginate } from "../../utils/Paginate";
import "../../styles/searchCrypto.css";
import Loader from "react-loader-spinner";

const SearchCryptoBody = () => {
  const [cryptos, setCryptos] = useState([]);
  const [allPagesResponse, setAllPagesResponse] = useState([]);
  const [cryptoPageNum, setCryptoPageNum] = useState(0);
  const [coinList, setCoinList] = useState([]);
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [firstLoad, setFirstLoad] = useState(true);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("value of search input is " + searchInput);
  };
  const handlePageChange = (page) => {
    console.log("the page change value is: ", page);
    setCurrentPage(page);
  };

  //const Loader = () => <div>Loading...</div>;
  const hideLoader = () => {
    setLoading(false);
  };

  const showLoader = () => {
    setLoading(true);
  };

  const loadMore = async () => {
    showLoader();
    console.log("value of crypto num is(loadMore): " + cryptoPageNum);
    if (cryptoPageNum === 0) {
      setCryptoPageNum(1);
    } else {
      setCryptoPageNum(cryptoPageNum + 1);
    }
    try {
      const response = await searchCryptoList(cryptoPageNum);
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

  const firstPage = async () => {
    showLoader();
    setCryptoPageNum(1);
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
  const loadFromBeginning = async () => {
    console.log("value of crypto num is(loadfrom beginning): " + cryptoPageNum);
    setCryptoPageNum(1);
    try {
      const response = await searchCryptoList(cryptoPageNum);
      setLoading(false);
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

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <input
          name="searchInput"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          size="lg"
          data-testid="input-element"
          placeholder="Search for a Cryptolist"
        />
        <button style={{ cursor: "pointer" }} type="submit">
          Submit Search
        </button>
      </form>

      <div>
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
            filteredList={cryptoPaginate}
          />
        )}
        {/*  <ShowList
          loading={loading}
          setLoading={setLoading}
          filteredList={cryptoPaginate}
        /> */}
        <Pagination
          itemsCount={cryptosLength}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        <button
          onClick={firstPage}
          className="btn-first-page"
          data-testid="first-page"
        >
          <p>GO TO FIRST PAGE</p>
        </button>

        <button
          onClick={loadMore}
          className="btn-new-page"
          data-testid="next-page"
        >
          <p>LOAD NEW PAGE</p>
        </button>
      </div>
    </div>
  );
};

export default SearchCryptoBody;
