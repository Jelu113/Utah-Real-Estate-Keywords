import { useState } from "react";

import "../styles/SearchResult.css";

const SearchResult = ({result}) => {
    return (
        <div className="search-result" onClick={(e) => alert(`clicked on ${result.section_number}`)}>{result.section_number}</div>
    )
}


export default SearchResult;