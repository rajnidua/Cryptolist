import React from "react";

const TrendingCryptoBody = (props) => {
  console.log(props);
  console.log("my trend", props.trendingList.coins[0].item.id);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flexStart",
        alignItems: "Center",
      }}
    >
      {/*  <img
        style={{
          height: "400px",
          width: "400px",
          position: "absolute",
        }}
      /> */}

      <h1>Welcome to GeeksforGeeks Team</h1>
      <div>
        {props.trendingList.coins.map((coin) => (
          <div key={coin.item.id}>
            <img src={coin.item.large}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCryptoBody;
