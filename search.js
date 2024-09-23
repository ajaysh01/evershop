import React, { useState } from "react";
import "./search.css"; // Your CSS file import

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grapes",
    "Honeydew",
  ]; // Example suggestions

  const handleChange = (e) => {
    setSearchText(e.target.value);
    setShowSuggestions(true);
    setActiveSuggestion(-1); // Reset active suggestion on new input
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setShowSuggestions(false);
    setActiveSuggestion(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      if (activeSuggestion < suggestions.length - 1) {
        setActiveSuggestion(activeSuggestion + 1);
        setSearchText(suggestions[activeSuggestion + 1]); // Update search bar text
      }
    } else if (e.key === "ArrowUp") {
      if (activeSuggestion > 0) {
        setActiveSuggestion(activeSuggestion - 1);
        setSearchText(suggestions[activeSuggestion - 1]); // Update search bar text
      }
    } else if (e.key === "Enter") {
      if (activeSuggestion >= 0 && activeSuggestion < suggestions.length) {
        setSearchText(suggestions[activeSuggestion]);
        setShowSuggestions(false);
        setActiveSuggestion(-1);
      }
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Delay to allow click
        placeholder="Search..."
      />
      {showSuggestions && searchText && (
        <div className="search-suggestions">
          {suggestions
            .filter((suggestion) =>
              suggestion.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((suggestion, index) => (
              <div
                key={index}
                className={
                  index === activeSuggestion
                    ? "search-suggestion-item active"
                    : "search-suggestion-item"
                }
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
