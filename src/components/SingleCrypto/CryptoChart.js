import React, { useState, useEffect } from "react";
import { getDatasetAtEvent } from "react-chartjs-2";
import { Chart } from "react-google-charts";
import { searchChart } from "../../utils/API";
import Loader from "react-loader-spinner";

const CryptoChart = () => {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});
  const [data, setData] = useState({ index: [], price: [], volumes: [] });
  const hideLoader = () => {
    setLoading(false);
  };

  const showLoader = () => {
    setLoading(true);
  };
  const getData = async () => {
    showLoader();

    //let data = { index: [], price: [], volumes: [] };

    try {
      const response = await searchChart();
      setLoading(false);
      hideLoader();
      console.log(response.data);
      //setChartData(response.data);
      setResult(response.data);
      console.log("The result response is: ", result);
      //console.log("Object.keys is", Object.keys(result.prices));
      //console.log("Object.values is", Object.values(result.prices));

      //setData({ price: result.prices });
      //console.log("result prices are:", data);
      if (response.status !== 200) {
        setError(true);
      }
    } catch (err) {
      console.log(err);
    }
    /*  for (const item of Object.keys(result.prices)) {
      data.index.push(item[0]);
      data.price.push(item[1]);
    }
    for (const item of result.total_volumes) data.volumes.push(item[1]); */
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["x", "dogs"],
          [0, 0],
          [1, 10],
          [2, 23],
          [3, 17],
          [4, 18],
          [5, 9],
          [6, 11],
          [7, 27],
          [8, 33],
          [9, 40],
          [10, 32],
          [11, 35],
        ]}
        options={{
          hAxis: {
            title: "Time",
          },
          vAxis: {
            title: "Popularity",
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default CryptoChart;

/* data={[
          ["x", "dogs"],
          [0, 0],
          [1, 10],
          [2, 23],
          [3, 17],
          [4, 18],
          [5, 9],
          [6, 11],
          [7, 27],
          [8, 33],
          [9, 40],
          [10, 32],
          [11, 35],
        ]} */
