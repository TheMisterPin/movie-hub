import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from '../context/MovieContext';
import { MovieCard } from '../components/card/MovieCard';

const MovieDetails: React.FC = () => {
  const { fetchMovieByTitle, selectedMovie } = useMovies();
  const { title } = useParams<{ title: string }>(); // Assuming the URL parameter is named 'title'

  useEffect(() => {
    if (title) {
      fetchMovieByTitle(title);
    }
  }, [title, fetchMovieByTitle]);

  if (!selectedMovie) {
    return <div>fetched, not found
    </div>;
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MovieCard variant="fullscreen" movie={selectedMovie} />
    </div>
  );
};

export default MovieDetails;