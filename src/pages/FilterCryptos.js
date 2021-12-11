import React from "react";
import FilterCryptosBody from "../components/FilterCryptos/FilterCryptosBody";

const FilterCryptoList = (props) => {
  return (
    <div>
      <FilterCryptosBody inputValue={props.location} />
    </div>
  );
};

export default FilterCryptoList;
