import { filterCryptoList } from "../utils/API";
const axios = require("axios");

jest.mock("axios");

it("returns the name of the crypto currency", async () => {
  axios.get.mockResolvedValue([
    {
      ath: 69045,
      ath_change_percentage: -30.24061,
      ath_date: "2021-11-10T14:24:11.849Z",
      atl: 67.81,
      atl_change_percentage: 70930.70293,
      atl_date: "2013-07-06T00:00:00.000Z",
      circulating_supply: 18896843,
      current_price: 47981,
      fully_diluted_valuation: 1007603723404,
      high_24h: 50308,
      id: "bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      last_updated: "2021-12-10T07:09:38.119Z",
      low_24h: 47441,
      market_cap: 906691874637,
      market_cap_change_24h: -27094342111.534668,
      market_cap_change_percentage_24h: -2.90156,
      market_cap_rank: 1,
      max_supply: 21000000,
      name: "Bitcoin",
      price_change_24h: -1374.370366337076,
      price_change_percentage_24h: -2.78463,
      roi: null,
      symbol: "btc",
      total_supply: 21000000,
      total_volume: 27773840811,
    },
  ]);
  //expect.assertions(1);
  const data = await filterCryptoList(1);
  //setLoading(false);
  console.log("returned name is ", Object.values(data[0]));
  const resultValue = Object.values(data[0]);
  console.log("resultValue ", resultValue[19]);
  const returnedName = resultValue[19];
  expect(axios.get).toHaveBeenCalledTimes(1);
  console.log("axios.get return >>", axios.get.mock.results[0]);

  expect(returnedName).toEqual("Bitcoin");
});
