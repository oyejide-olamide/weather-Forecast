import React from "react";

function SearchBar({ city, setCity, onSearch, loading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="search-div">
      <h1 className="h1">How's the sky looking today?</h1>

      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <span className="search-btn">
            <img className="search-img" src="/images/icon-search.svg" alt="Search" />
            <input 
              type="text" 
              name="text" 
              id="search" 
              value={city} 
              onChange={e => setCity(e.target.value)}
              placeholder="Enter city name..."
              disabled={loading}
            />
          </span>
          <button 
            className="btn" 
            type="submit" 
            disabled={loading || !city.trim()}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>    
      </form>
    </div>
  );
}

export default SearchBar;