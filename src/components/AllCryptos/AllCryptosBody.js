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
  const [errorMessage, setErrorMessage] = useState(false);
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
    setCurrentPage(page);
  };

  const cryptosLength = Object.keys(allCryptos).length;

  const getData = async () => {
    showLoader();

    try {
      const response = await searchCryptoList(cryptoPageNum);
      setLoading(false);
      hideLoader();

      setAllCryptos(response.data);

      if (response.status !== 200) {
        setErrorMessage(true);
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

  if (errorMessage) {
    return <h1>Something went wrong!! Try Again!!</h1>;
  }

  return (
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
        <div className="load-next-records">
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
        </div>
      ) : (
        <div>{setCryptoPageNum(1)}</div>
      )}
    </div>
  );
};

export default AllCryptosBody;
