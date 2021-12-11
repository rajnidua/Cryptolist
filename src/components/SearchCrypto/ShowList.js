import React from "react";
import "../../styles/showList.css";
import SingleCryptoBody from "../SingleCrypto/SingleCryptoBody";
import { Link } from "react-router-dom";

const ShowList = (props) => {
  console.log(props);
  return (
    <div className="crypto-container">
      <div className="crypto-row first">
        <h4 className="first-col">Name</h4>
        <h4>Change(24hr)</h4>
        <h4>Price</h4>
      </div>
      {props.filteredList.map((crypto) => (
        <div className="crypto-row" key={crypto.id}>
          <div className="crypto-name">
            <div className="img-section">
              {/*  <Link to="/singleCrypto" state={crypto.id}>
                <img src={crypto.image} alt="image" />
              </Link> */}
              <Link
                to={{
                  pathname: "/singleCrypto",
                  state: [crypto.id],
                }}
                className="btn"
              >
                <img src={crypto.image} alt="image" />
              </Link>
              {/* <Link
                to={{
                  pathname: "/EnrollmentConfirmation",
                  state: [newProps],
                }}
                className="btn"
              >
                Enroll 
              </Link>*/}
            </div>
            <div className="name-section">
              <div className="title">{crypto.name}</div>
              <div>{crypto.symbol.toUpperCase()}</div>
            </div>
          </div>
          <div className="change-percentage">
            {crypto.market_cap_change_percentage_24h < 0 ? (
              <p className="red">
                {crypto.market_cap_change_percentage_24h.toFixed(2)}
                <span className="down-arrow">&#x2193;</span>
              </p>
            ) : (
              <p className="green">
                +
                {crypto.market_cap_change_percentage_24h
                  ? crypto.market_cap_change_percentage_24h.toFixed(2)
                  : ""}
                <span className="up-arrow">&#x2191;</span>
              </p>
            )}
          </div>
          <div className="current-price">${crypto.current_price}</div>
        </div>
      ))}
    </div>
  );
};

export default ShowList;

/*<div>
      <table>
        <tr>
          <th>COIN</th>
          <th>24hr</th>
          <th>RATE</th>
        </tr>
        {props.filteredList.map((crypto) => (
          <tr key={crypto.id}>
            <td>
              <div className="name-container">
                <div className="name-img">
                  <img src={crypto.image} alt="image" />
                </div>
                <div className="name-info">
                  <p>{crypto.name}</p>
                  <div>{crypto.symbol}</div>
                </div>
              </div>
            </td>
            <td>
              {crypto.market_cap_change_percentage_24h < 0 ? (
                <p className="red">
                  {crypto.market_cap_change_percentage_24h.toFixed(2)}
                  <span className="downArrow">&#x2193;</span>
                </p>
              ) : (
                <p className="green">
                  {crypto.market_cap_change_percentage_24h.toFixed(2)}
                  <span className="upArrow">&#x2191;</span>
                </p>
              )}
            </td>
            <td>${crypto.current_price}</td>
          </tr>
        ))}
      </table>
    </div>*/
