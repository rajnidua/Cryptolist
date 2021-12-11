import React from "react";
import TrendingCryptoBody from "../components/TrendingCrypto/TrendingCryptoBody";
import FindTrending from "../components/TrendingCrypto/FindTrending";

const TrendingCrypto = (props) => {
  return (
    <div>
      <FindTrending coin={props.location} />
    </div>
  );
};

export default TrendingCrypto;
