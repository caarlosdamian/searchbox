import React from "react";
import "./Items.css";
const Items = ({ filterData }) => {
  return (
    <>

        <div className="suggestion">
          <span className="suggestion-span">Suggestions</span>
          <span className="suggestion-ex">x</span>
        </div>
        {filterData.map((value) => (
          <div className="check" key={value.name}>
            <div className="check-container">
              <span className="dataItem">{value.name}</span>
              <span className="dataItem"> erindapplebee@dardencom</span>
            </div>
          </div>
        ))}

      
    </>
  );
};

export default Items;
