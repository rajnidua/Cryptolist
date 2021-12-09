import axios from "axios";

export const searchCryptoList = () => {
  return axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=3&sparkline=false"
  );
};
