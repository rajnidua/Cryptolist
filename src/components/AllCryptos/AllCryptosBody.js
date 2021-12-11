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

  const hideLoader = () => {
    setLoading(false);
  };

  const showLoader = () => {
    setLoading(true);
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
        <ShowList
          loading={loading}
          setLoading={setLoading}
          filteredList={allCryptos}
        />
      )}
    </div>
  );
};

export default AllCryptosBody;
