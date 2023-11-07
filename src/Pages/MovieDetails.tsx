import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useMovies } from '../context/MovieContext';
import { MovieCard } from '../components/card/MovieCard';
import NavBar from '../styled components/elements/NavBar';
import FormHeader from '../styled components/elements/FormHeader';



// Styled component for the overall layout container
const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden; // This prevents any child components from overflowing outside the viewport
`;

// Styled component for the content area which will allow scrolling
const ContentArea = styled.div`
  position: absolute;
  top: var(--header-height); // Replace with actual header height
  bottom: var(--nav-bar-height); // Replace with actual navbar height
  width: 100%;
  overflow-y: auto; // Enables vertical scrolling
  padding: 1rem; // Add padding if needed
`;

// Styled component for the background
const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

// Background image styled component extracted from MovieCard
const BackgroundImage = styled.div<{ poster: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.poster});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
`;

const BackgroundColorLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.primary.dark};
  z-index: -2;
`;

const MovieDetails: React.FC = () => {
  const { fetchMovieByTitle, selectedMovie } = useMovies();
  const { title } = useParams<{ title: string }>();

  useEffect(() => {
    if (title) {
      fetchMovieByTitle(title);
    }
  }, [title, fetchMovieByTitle]);

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <LayoutContainer>
      <FormHeader text={selectedMovie.title} /> {/* This is your header component */}
      <BackgroundContainer>
        <BackgroundColorLayer />
        <BackgroundImage poster={selectedMovie.poster} />
      </BackgroundContainer>
      <ContentArea>
        <MovieCard variant="fullscreen" movie={selectedMovie} />
      </ContentArea>
      <NavBar /> {/* This is your navigation bar component */}
    </LayoutContainer>
  );
};

export default MovieDetails;