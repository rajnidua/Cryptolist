import React, { useState, useEffect } from "react";
import { getDatasetAtEvent } from "react-chartjs-2";
import { getSingleCrypto } from "../../utils/API";

const SingleCryptoBody = (props) => {
  console.log("props for single crypto", props);
  const [singleCrypto, setSingleCrypto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
      setLoading(false);
      hideLoader();

      console.log("trendinglist is ", response.data);
      setSingleCrypto(response.data);

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
    <div className="single-crypto-container">
      <img src={props.crypto.large}></img>
      <div>{props.crypto.name}</div>
      <div>{props.crypto.market_cap_rank}</div>
      <div>NAME:{singleCrypto.name}</div>
      <div>MARKET CAP RANK:{singleCrypto.market_cap_rank}</div>
      <div>
        MARKET CAP % CHANGE
        {singleCrypto.market_data.market_cap_change_percentage_24h}%
      </div>
      <div>
        CURRENT PRICE
        {singleCrypto.market_data.current_price.usd} USD
      </div>
      <div>
        HIGH(24hr)
        {singleCrypto.market_data.high_24h.usd} USD
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
