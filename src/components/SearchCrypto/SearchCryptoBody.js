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
  const [allPagesResponse, setAllPagesResponse] = useState([]);
  const [cryptoPageNum, setCryptoPageNum] = useState(0);
  const [coinList, setCoinList] = useState([]);
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState("loading");
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

  const loadMore = async () => {
    console.log("value of crypto num is(loadMore): " + cryptoPageNum);
    setCryptoPageNum(cryptoPageNum + 1);
    try {
      const response = await searchCryptoList(cryptoPageNum);
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
  const loadFromBeginning = async () => {
    console.log("value of crypto num is(loadfrom beginning): " + cryptoPageNum);
    setCryptoPageNum(1);
    try {
      const response = await searchCryptoList(cryptoPageNum);
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

  /* const getData = async () => {
    for (let i = 1; i <= 4; i++) {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${i}&sparkline=false`
        )
        .then((res) => {
          setAllPagesResponse(res.data);
          console.log("all pages response is ", allPagesResponse);
        })
        .catch((err) => console.error(err));
      setCryptoPageNum(cryptoPageNum + 1);
    }
  };
  if (cryptoPageNum === 4) {
    setCryptos(allPagesResponse);
  } */
  /* const getData = async () => {
    try {
      const response = await searchCryptoList(cryptoPageNum);
      setLoading("not loading");
      console.log(response.data);
      setCryptos(response.data);

      if (response.status !== 200) {
        setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  }; */
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

  /* useEffect(() => {
    getData();
  }, []); */

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
        {/*  {cryptoPageNum === 5 ? setCryptoPageNum(1) : ""}
        <button onClick={loadFromBeginning}>Load from Beginning</button>
        {cryptoPageNum <= 4 ? (
          <button onClick={loadMore}>Load More(101-200)</button>
        ) : (
          ""
        )} */}

        {cryptoPageNum === 5 ? setCryptoPageNum(0) : ""}
        {/*  {cryptoPageNum === 5 || cryptoPageNum === 1 ? (
          <div>
            <button onClick={loadFromBeginning}>Load from Beginning</button>
          </div>
        ) : (
          ""
        )} */}
        {/* <button onClick={loadFromBeginning}>Load from Beginning</button> */}
        {cryptoPageNum <= 4 ? (
          <button onClick={loadMore}>
            {cryptoPageNum === 4 ? (
              <div>
                <p>Load from start</p>
              </div>
            ) : (
              <p>Load Next</p>
            )}
          </button>
        ) : (
          ""
        )}
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
