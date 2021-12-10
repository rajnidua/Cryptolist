import React from "react";

const TrendingCryptoBody = (props) => {
  console.log(props);
  console.log("my trend", props.trendingList.coins[0].item.id);
  return (
    <div>
      <divColumn
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flexStart",
          alignItems: "Center",
        }}
      ></divColumn>
      <divRow
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "Center",
          margin: "10px",
        }}
      ></divRow>
      <img
        style={{
          height: "100px",
          border: "solid 2px blue",
        }}
      ></img>

      <divColumn>
        <h1>Welcome to GeeksforGeeks Team</h1>
        <divRow>
          {props.trendingList.coins.map((coin) => (
            <divRow key={coin.item.id}>
              <img src={coin.item.large}></img>
            </divRow>
          ))}
        </divRow>
      </divColumn>
    </div>
  );
};

export default TrendingCryptoBody;
