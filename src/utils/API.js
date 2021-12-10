import axios from "axios";

export const searchCryptoList = (cryptoPageNum) => {
  return axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${cryptoPageNum}&sparkline=false`
  );
};

export const searchTrendingList = () => {
  return axios.get(`https://api.coingecko.com/api/v3/search/trending`);
};

export const searchChart = () => {
  return axios.get(
    `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1`
  );
};
