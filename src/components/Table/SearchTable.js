import React from 'react'
import  SearchIcon  from "../../assets/images/my-img/search.svg";

const SearchTable = ({ SearchTable, filteredText, placeholder }) => {
  return (
    <>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center py-2 pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          onChange={SearchTable}
          value={filteredText}
          type=""
          name=""
          id=""
          className="block w-full py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:bg-white focus:border-primary500 sm:text-sm"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default SearchTable