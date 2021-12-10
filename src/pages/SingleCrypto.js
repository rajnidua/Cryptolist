import React from "react";
import SingleCryptoBody from "../components/SingleCrypto/SingleCryptoBody.js";
import Header from "../components/Header/Header";
import CryptoChart from "../components/SingleCrypto/CryptoChart.js";

const SingleCryptoDetail = (props) => {
  console.log("props from crypto detail page are ", props);

  return (
    <div>
      <SingleCryptoBody crypto={props.location.state} />
      <CryptoChart />
    </div>
  );
};

export default SingleCryptoDetail;
