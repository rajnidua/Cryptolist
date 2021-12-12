import React, { useState, useEffect } from "react";
import { getDatasetAtEvent } from "react-chartjs-2";
import { getSingleCrypto } from "../../utils/API";
import "../../styles/singleCrypto.css";
import Loader from "react-loader-spinner";

const SingleCryptoBody = (props) => {
  console.log("props for single crypto", props);

  const [isLoading, setLoading] = useState(true);

  const [singleCrypto, setSingleCrypto] = useState();
  useEffect(() => {
    getSingleCrypto(props.crypto.id).then((items) => {
      console.log("Line 38 items data is --->", items.data);
      console.log("Assigning the value for setSingleCrypto");
      setSingleCrypto(items.data);
      // let singleCrypto = items.data;

      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="show-loader">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }

  console.log("Single Crypto is :---", singleCrypto);

  console.log(
    "Linte item 55 : Single Crypto description is :---",
    singleCrypto.description.en
  );
  console.log("Linte item 56 : Market Data  is :---", singleCrypto.market_data);

  return (
    <div className="single-crypto-container">
      {isLoading ? (
        isLoading
      ) : (
        <div>
          {" "}
          <img src={props.crypto.large}></img>
          <div className="single-crypto-card">
            <div className="single-crypto-label">NAME</div>
            <div className="single-crypto-name">{props.crypto.name}</div>
          </div>
          <div className="single-crypto-card">
            <div className="single-crypto-label">Market Rank</div>
            <div className="single-crypto-name">
              {props.crypto.market_cap_rank}
            </div>
          </div>
          <div>Supply : {singleCrypto.market_data.total_supply.usd}</div>
          <div>
            Current Price: ${singleCrypto.market_data.current_price.usd}
          </div>
          <div>Market Cap: {singleCrypto.market_data.market_cap.usd}</div>
          <div>Volume: {singleCrypto.market_data.total_volume.usd}</div>
          <div>High 24h: ${singleCrypto.market_data.high_24h.usd}</div>
          <div>Low 24h: ${singleCrypto.market_data.low_24h.usd}</div>
          <div>
            Price Change 24h: $
            {singleCrypto.market_data.price_change_24h_in_currency.usd} (%:{" "}
            {
              singleCrypto.market_data.price_change_percentage_24h_in_currency
                .usd
            }
            )
          </div>
          <div>
            What is {props.crypto.name}? {singleCrypto.description.en}{" "}
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleCryptoBody;
