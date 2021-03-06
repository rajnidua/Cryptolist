import React from "react";
import SingleCryptoBody from "../components/SingleCrypto/SingleCryptoBody.js";

import CryptoChart from "../components/SingleCrypto/CryptoChart.js";

const SingleCryptoDetail = (props) => {
  return (
    <div>
      <SingleCryptoBody crypto={props.location.state[0]} />
      <CryptoChart crypto={props.location.state[0]} />
    </div>
  );
};

export default SingleCryptoDetail;
