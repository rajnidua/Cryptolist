import axios from "axios";

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchCryptoList = () => {
  return axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
};
