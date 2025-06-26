import React from 'react';
import './HeroBanner.css';

function HeroBanner({ query, setQuery }) {
  return (
    <div className="hero-banner">
      <div className="overlay">
        <h1>Welcome.</h1>
        <p>Millions of movies and series to discover. Explore now.</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a movie or series..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
