import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Container from "../Container/Container";
import "./searchbox.css";
const SearchBox = () => {
  return (
    <>
      <div className="input-container">
        <input className="input-container-box" placeholder="Search" />
      <Container/>
      </div>
    </>
  );
};

export default SearchBox;
