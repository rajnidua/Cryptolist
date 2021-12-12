import React, { useEffect, useState } from "react";
import ShowList from "../SearchCrypto/ShowList";
import axios from "axios";
import TrendingCryptoBody from "./TrendingCryptoBody";
import { searchTrendingList } from "../../utils/API";
import "../../styles/trendingCrypto.css";

const FindTrending = () => {
  //const [trendingCryptoList, setTrendingCryptoList] = useState([]);
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const hideLoader = () => {
    setLoading(false);
  };

  const showLoader = () => {
    setLoading(true);
  };

  const trendingCryptoList = async () => {
    showLoader();

    try {
      const response = await searchTrendingList();
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
  const cryptosLength = Object.keys(cryptos).length;
  useEffect(() => {
    trendingCryptoList();
  }, []);
  return (
    <div className="container-find-trending">
      {loading || !cryptosLength ? (
        <div>loading</div>
      ) : (
        <div>
          <TrendingCryptoBody
            loading={loading}
            setLoading={setLoading}
            trendingList={cryptos}
          />
        </div>
      )}
    </div>
  );
};

export default FindTrending;
