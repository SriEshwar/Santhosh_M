import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/movieService';
import HeroBanner from '../components/HeroBanner';
import MovieCard from '../components/MovieCard';

function Home({ category }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  const filtered = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) &&
      movie.type === category
  );

  const visibleMovies = filtered.slice(0, visibleCount);

  return (
    <div style={{ paddingBottom: '40px' }}>
      <HeroBanner query={query} setQuery={setQuery} />
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '20px' }}>
          {category === 'movie' ? 'Trending Movies' : 'Trending Web Series'}
        </h2>
        <div
          className="movie-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {visibleMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        {visibleCount < filtered.length && (
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button onClick={() => setVisibleCount((prev) => prev + 6)}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
