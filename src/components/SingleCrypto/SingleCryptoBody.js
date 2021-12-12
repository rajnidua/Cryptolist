import React, { useState, useEffect } from "react";
import { getDatasetAtEvent } from "react-chartjs-2";
import { getSingleCrypto } from "../../utils/API";
import "../../styles/singleCrypto.css";
import Loader from "react-loader-spinner";

const SingleCryptoBody = (props) => {
  const [isLoading, setLoading] = useState(true);

  const [singleCrypto, setSingleCrypto] = useState();
  useEffect(() => {
    getSingleCrypto(props.crypto).then((items) => {
      console.log("Line 38 items data is --->", items.data);
      console.log("Assigning the value for setSingleCrypto");
      setSingleCrypto(items.data);

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

  return (
    <div>
      {isLoading ? (
        isLoading
      ) : (
        <div className="main-info-container">
          <div className=" title-crypto-container">
            <div className="title-info">
              {/* <img src={props.crypto.large}></img> */}
              <img src={singleCrypto.image.large}></img>

              {/* <span className="title">{props.crypto.name}</span> */}
              <span className="title">{singleCrypto.name}</span>
            </div>
          </div>
          <div className="info-container">
            <div className="single-crypto-container crypto-table">
              <table>
                <tbody>
                  <tr className="table-row">
                    <th scope="row">Market Rank</th>
                    <td>{singleCrypto.market_cap_rank}</td>
                  </tr>
                  <tr className="table-row">
                    <th scope="row">Supply</th>
                    <td>{singleCrypto.market_data.total_supply}</td>
                  </tr>
                  <tr className="table-row">
                    <th scope="row">Current Price</th>
                    <td>{singleCrypto.market_data.current_price.usd}</td>
                  </tr>
                  <tr className="table-row">
                    <th scope="row">Market Cap</th>
                    <td>{singleCrypto.market_data.market_cap.usd}</td>
                  </tr>
                  <tr className="table-row">
                    <th scope="row">Volume</th>
                    <td> {singleCrypto.market_data.total_volume.usd}</td>
                  </tr>
                  <tr className="table-row">
                    <th scope="row">High(24h)</th>
                    <td>{singleCrypto.market_data.total_volume.usd}</td>
                  </tr>
                  <tr className="table-row">
                    <th scope="row">Low(24h)</th>
                    <td> {singleCrypto.market_data.low_24h.usd}</td>
                  </tr>
                  <tr className="table-row">
                    <th scope="row">Price Change(24h)</th>
                    <td>
                      $
                      {
                        singleCrypto.market_data.price_change_24h_in_currency
                          .usd
                      }{" "}
                      (%:{" "}
                      {
                        singleCrypto.market_data
                          .price_change_percentage_24h_in_currency.usd
                      }
                      )
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="single-crypto-container desc">
              {singleCrypto.description.en}{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleCryptoBody;
