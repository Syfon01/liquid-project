import React from "react";
import SearchIcon from "../../assets/images/my-img/search.svg";

const SearchTable = ({ SearchTable, filteredText, placeholder }) => {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text bg-white" id="basic-addon1">
          <img src={SearchIcon} />
        </span>
        <input
          onChange={SearchTable}
          value={filteredText}
          type=""
          name=""
          id=""
          className="form-control"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default SearchTable;
