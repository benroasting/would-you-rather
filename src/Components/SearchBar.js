import React from "react";

const Search = ({ onChange, searchText }) => {
  console.log(onChange);
  const searchHandler = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <div>
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
