import React, { useState } from "react";
import Container from "../Container/Container";
import "./searchbox.css";
import { useData } from "../../hooks/useData";

const SearchBox = () => {
  const { data } = useData();
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newfilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newfilter);
    }
  };

  return (
    <>
      <div className="input-container">
        <input
          className="input-container-box"
          placeholder="Search"
          onChange={handleFilter}
        />
        {filterData.length >= 0 && <Container filterData={filterData} />}
      </div>
    </>
  );
};

export default SearchBox;
