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
  const [error, setError] = useState([]);
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
      const response = await searchCryptoList(1);
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
    </div>
  );
};

export default AllCryptosBody;
