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
    getSingleCrypto(props.crypto).then((items) => {
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
                    <td>{singleCrypto.market_data.total_supply.usd}</td>
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

            {/*  <div className="single-crypto-container">
              <div className="left">
                <div className="single-crypto-card">
                  <div className="single-crypto-label">Market Rank</div>
                  <div className="single-crypto-name">
                    {props.crypto.market_cap_rank}
                  </div>
                </div>
                <div className="single-crypto-card">
                  <div className="single-crypto-label">Supply</div>
                  <div className="single-crypto-name">
                    {singleCrypto.market_data.total_supply.usd}
                  </div>
                </div>
                <div className="single-crypto-card">
                  <div className="single-crypto-label">Current Price</div>
                  <div className="single-crypto-name">
                    {singleCrypto.market_data.current_price.usd}
                  </div>
                </div>
                <div className="single-crypto-card">
                  <div className="single-crypto-label">Market Cap</div>
                  <div className="single-crypto-name">
                    {singleCrypto.market_data.market_cap.usd}
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="single-crypto-card">
                  <div className="single-crypto-label">Volume</div>
                  <div className="single-crypto-name">
                    {singleCrypto.market_data.total_volume.usd}
                  </div>
                </div>
                <div className="single-crypto-card">
                  <div className="single-crypto-label">High(24h)</div>
                  <div className="single-crypto-name">
                    {singleCrypto.market_data.total_volume.usd}
                  </div>
                </div>
                <div className="single-crypto-card">
                  <div className="single-crypto-label">Low(24h)</div>
                  <div className="single-crypto-name">
                    {singleCrypto.market_data.low_24h.usd}
                  </div>
                </div>
                <div className="single-crypto-card">
                  <div className="single-crypto-label">Price Change(24h)</div>
                  <div className="single-crypto-name">
                    ${singleCrypto.market_data.price_change_24h_in_currency.usd}{" "}
                    (%:{" "}
                    {
                      singleCrypto.market_data
                        .price_change_percentage_24h_in_currency.usd
                    }
                    )
                  </div>
                </div>
              </div>
            </div> */}
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
