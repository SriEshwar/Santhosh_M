import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTrendingMovies } from '../services/movieService';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then((data) => {
      const selected = data.find((m) => m.id === parseInt(id));
      setMovie(selected);
    });
  }, [id]);

  if (!movie) return <p style={{ padding: '2rem' }}>Loading...</p>;

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        background: '#f5f5f5',
      }}
    >
      <img
        src={movie.poster}
        alt={movie.title}
        style={{ width: '300px', borderRadius: '12px' }}
      />
      <div>
        <h1>{movie.title}</h1>
        <p style={{ fontSize: '1.1rem', margin: '1rem 0' }}>{movie.description}</p>
        <p style={{ fontWeight: 'bold' }}>Rating: ⭐ {movie.rating}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
