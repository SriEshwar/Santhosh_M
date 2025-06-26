import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const [fav, setFav] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${movie.id}`)}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        width: '180px',
        position: 'relative',
      }}
    >
      <img
        src={movie.poster}
        alt={movie.title}
        style={{ width: '100%', height: '270px', objectFit: 'cover' }}
      />
      <div style={{ padding: '10px' }}>
        <h4>{movie.title}</h4>
        <p style={{ color: '#f39c12' }}>⭐ {movie.rating}</p>
      </div>
      <button
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'transparent',
          border: 'none',
          fontSize: '1.2rem',
          color: fav ? 'red' : 'lightgray',
        }}
        onClick={(e) => {
          e.stopPropagation();
          setFav(!fav);
        }}
      >
        ♥
      </button>
    </div>
  );
}

export default MovieCard;
