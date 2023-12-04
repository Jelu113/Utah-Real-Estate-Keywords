import { useState } from "react";

import "../styles/SearchResult.css";

const SearchResult = ({ result, setSavedValue }) => {
  const handleClick = () => {
    setSavedValue(result.section_number);
  };

  return (
    <div className="search-result" result="" onClick={handleClick}>
      {result.section_number}
    </div>
  );
};

export default SearchResult;
