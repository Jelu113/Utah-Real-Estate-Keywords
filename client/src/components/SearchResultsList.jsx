
import SearchResult from "./SearchResult";
import { useState } from "react";

import "../styles/searchResultsList.css";
const SearchResultsList = ({ results }) => {
  const [savedValue, setSavedValue] = useState("");
  return (
    <div className="results-list">
      {results.map((result, index) => {
          return <SearchResult result={result} key={index} setSavedValue />
      })}
    </div>
  );
};

export default SearchResultsList;
