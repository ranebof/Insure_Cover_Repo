import "./dist/SavedPolicy.css";
import React, { useState } from "react";

export default function SavedPolicy() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="policies-cont">
      <div className="search_holder">
        <input
          className="search-bar"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="saved-policies-list"></div>
    </div>
  );
}
