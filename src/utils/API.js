import axios from "axios";

export const searchCryptoList = (cryptoPageNum) => {
  return axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${cryptoPageNum}&sparkline=false`
  );
};

export const filterCryptoList = (cryptoPageNum) => {
  return axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${cryptoPageNum}&sparkline=false`
  );
};

export const searchTrendingList = () => {
  return axios.get(`https://api.coingecko.com/api/v3/search/trending`);
};

export const getChart = (id, days = 365, currency) => {
  return axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
  );
};

export const getSingleCrypto = (id) => {
  return axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
};

/* export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`; */
