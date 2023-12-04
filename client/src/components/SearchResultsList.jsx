import SearchResult from "./SearchResult";
import { useState } from "react";

import "../styles/searchResultsList.css";
const SearchResultsList = ({ results }) => {
  console.log(results);
  return (
    <div className="results-list">
      {results.map((result, index) => {
        return (
          <SearchResult
            result={result}
            key={index}
            setSavedValue={result.section_number}
          />
        );
      })}
    </div>
  );
};

export default SearchResultsList;
