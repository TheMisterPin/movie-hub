import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMovies } from '../context/MovieContext';
import { MovieCard } from '../components/card/MovieCard';
import NavBar from '../styled components/elements/NavBar';
import { PageContainer } from '../components/homeContainers/PageContainer';



// Styled component for the overall layout container


const MovieDetails: React.FC = () => {
  const { fetchMovieByTitle, selectedMovie } = useMovies();
  const { title } = useParams<{ title: string }>();

  useEffect(() => {
    if (title) {
      fetchMovieByTitle(title);
    }
  }, []);

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <PageContainer>
        <MovieCard variant="fullscreen" movie={selectedMovie} />   
   
    <NavBar /> 
    </PageContainer>
  );
};

export default MovieDetails;