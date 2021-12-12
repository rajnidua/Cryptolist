import React from "react";
import "../../styles/trendingCrypto.css";
import { Link } from "react-router-dom";

const TrendingCryptoBody = (props) => {
  return (
    <div className="container-trending">
      <h1>Top 7 Trending Cryptos</h1>

      <div className="card-section">
        {props.trendingList.coins.map((coin) => (
          <div key={coin.item.id} className="show-card">
            <Link
              to={{
                pathname: "/singleCrypto",
                state: [coin.item.id],
              }}
            >
              <img src={coin.item.thumb}></img>
            </Link>

            <div>{coin.item.symbol.toUpperCase()}</div>
            <div>{coin.item.name.toUpperCase()}</div>
            <Link
              to={{
                pathname: "/singleCrypto",
                state: [coin.item.id],
              }}
            >
              <button className="btn-trending">VIEW</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCryptoBody;
