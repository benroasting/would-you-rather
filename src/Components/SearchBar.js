import React from "react";

const Search = ({ onChange, searchText }) => {
  const searchHandler = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        className="search-bar"
        type="search"
        placeholder="Search Here"
        onChange={searchHandler}
        value={searchText}
      />
    </div>
  );
};

export default Search;
