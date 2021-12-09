import React from "react";

const ShowList = (props) => {
  console.log(props);
  return (
    <div>
      <table>
        <tr>
          <th>COIN</th>
          <th>24hr</th>
          <th>RATE</th>
        </tr>
        {props.filteredList.map((crypto) => (
          <tr key={crypto.id}>
            <td>
              <div>
                <img src={crypto.image} alt="image" />
                {crypto.name}
              </div>
              <div>{crypto.symbol}</div>
            </td>
            <td>
              {crypto.market_cap_change_percentage_24h < 0 ? (
                <p className="red">
                  {crypto.market_cap_change_percentage_24h.toFixed(2)}
                  <span className="downArrow">&#x2193;</span>
                </p>
              ) : (
                <p className="green">
                  {crypto.market_cap_change_percentage_24h.toFixed(2)}
                  <span className="upArrow">&#x2191;</span>
                </p>
              )}
            </td>
            <td>${crypto.current_price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ShowList;
