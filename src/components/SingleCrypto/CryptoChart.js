import axios from "axios";
//import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import { getChart } from "../../utils/API";
import { Line } from "react-chartjs-2";
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { chartDays } from "../../utils/data";
import SelectButton from "../SelectButton";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoChart = (props) => {
  console.log("props from crypto chart ", props);
  const [chartData, setChartData] = useState();
  const [days, setDays] = useState(1);
  const currency = "usd";

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));

  const classes = useStyles();

  const fetchChartData = async () => {
    try {
      const response = await getChart(props.crypto.id, days, currency);

      console.log("chart data is ", response.data);
      setChartData(response.data.prices);

      if (response.status !== 200) {
        throw new console.error("Something went wrong!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(chartData);
  useEffect(() => {
    fetchChartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);
  return (
    <div className={classes.container}>
      {!chartData ? (
        <CircularProgress style={{ color: "gold" }} size={250} thickness={1} />
      ) : (
        <>
          <Line
            data={{
              labels: chartData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: chartData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${currency}`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => setDays(day.value)}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoChart;
