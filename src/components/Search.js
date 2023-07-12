import React from "react";

function Search({ searchTerm, onHandleSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={onHandleSearch}
      />
    </div>
  );
}

export default Search;
