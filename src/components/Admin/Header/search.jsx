import React, { useState } from "react";
import "./search.css";
 // Make sure to include the CSS file

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by Name, Email, Phone etc.."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="search"></div>
    </div>
  );
};

export default Search;
