import React, { useState, useEffect } from "react";
import { searchCryptoList } from "../../utils/API";
import ShowList from "../SearchCrypto/ShowList";
import Loader from "react-loader-spinner";
import _ from "lodash";
import Pagination from "../Pagination";
import { Paginate } from "../../utils/Paginate";
import "../../styles/searchCrypto.css";

const AllCryptosBody = () => {
  const [allCryptos, setAllCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cryptoPageNum, setCryptoPageNum] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const hideLoader = () => {
    setLoading(false);
  };

  const showLoader = () => {
    setLoading(true);
  };
  const handlePageChange = (page) => {
    console.log("the page change value is: ", page);
    setCurrentPage(page);
  };

  const cryptosLength = Object.keys(allCryptos).length;

  const getData = async () => {
    showLoader();
    //setCryptoPageNum(1);
    try {
      const response = await searchCryptoList(cryptoPageNum);
      setLoading(false);
      hideLoader();
      console.log(response.data);
      setAllCryptos(response.data);

      if (response.status !== 200) {
        setError(true);
      }
    } catch (err) {
      console.log(err);
    }
    setCryptoPageNum(cryptoPageNum + 1);
  };

  const cryptoPaginate = Paginate(allCryptos, currentPage, pageSize);

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
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
      )}

      {cryptoPageNum <= 4 ? (
        <button
          onClick={getData}
          className="btn-new-page"
          data-testid="next-page"
        >
          <p>
            {cryptoPageNum === 1 ? (
              <span>LOAD FROM BEGINNING</span>
            ) : (
              <span>LOAD NEXT 100 RECORDS</span>
            )}
          </p>
        </button>
      ) : (
        <div>{setCryptoPageNum(1)}</div>
      )}
    </div>
  );
};

export default AllCryptosBody;
