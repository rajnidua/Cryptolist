import React, { useState, useEffect } from "react";
import { getDatasetAtEvent } from "react-chartjs-2";
import { getSingleCrypto } from "../../utils/API";
import "../../styles/singleCrypto.css";

const SingleCryptoBody = (props) => {
  console.log("props for single crypto", props);
  const [singleCrypto, setSingleCrypto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [runUseEffect, setRunUseEffect] = useState(true);
  const [responseArray, setResponseArray] = useState([]);
  // const [coin, setCoin] = useState(null);

  const hideLoader = () => {
    setLoading(false);
  };

  const showLoader = () => {
    setLoading(true);
  };

  const getData = async () => {
    showLoader();
    console.log("I am inside single crypto");
    try {
      const response = await getSingleCrypto(props.crypto.id);
      //setLoading(false);
      hideLoader();
      setResponseArray(response.data);
      console.log("+++++++++++++++++++");
      //console.log("*************trendinglist is ", response.data);
      setSingleCrypto(response.data);

      if (response.status !== 200) {
        setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log("Single Crypto is :---", singleCrypto);
  console.log("Single Crypto is :---", singleCrypto.description);
  const descData = singleCrypto.description;
  console.log("!!!!!!!!!!Desc data is ", descData);
  //console.log("%%%%%%%%%Desc data is ", descData.en);

  useEffect(() => {
    getData();
  }, []);

  //if (coin === null) return <div>Loading screen</div>;
  return (
    <div className="single-crypto-container">
      {getData}
      <img src={props.crypto.large}></img>
      <div className="single-crypto-card">
        <div className="single-crypto-label">NAME</div>
        <div className="single-crypto-name">{props.crypto.name}</div>
      </div>
      <div className="single-crypto-card">
        <div className="single-crypto-label">Market Rank</div>
        <div className="single-crypto-name">{props.crypto.market_cap_rank}</div>
      </div>

      <div className="single-crypto-card">
        <div className="single-crypto-label">Description</div>
        {/* <div className="single-crypto-name">
          {singleCrypto.description ? (
            singleCrypto.description.map((item, index) => (
              <div className="items" key={index}>
                <div className="text-center">
                  <p className="fs-12">{item}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No Description</p>
          )}
        </div> */}
      </div>
    </div>
  );
};
export default SingleCryptoBody;

{
  /* <div>
        MARKET CAP % CHANGE
        {singleCrypto.market_data.market_cap_change_percentage_24h}
      </div>
      <div>
        CURRENT PRICE
        {singleCrypto.market_data.current_price.usd}
      </div>
      <div>
        HIGH(24hr)
        {singleCrypto.market_data.high_24h.usd}
      </div> */
}
