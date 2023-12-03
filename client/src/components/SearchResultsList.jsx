
import SearchResult from "./SearchResult";


import "../styles/searchResultsList.css";
const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, index) => {
          return <SearchResult result={result} key={index} />
      })}
    </div>
  );
};

export default SearchResultsList;
