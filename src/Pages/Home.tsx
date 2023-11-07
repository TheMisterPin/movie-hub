import React from 'react';
import styled from 'styled-components';
import { Movie, useMovies } from '../context/MovieContext';
import { MovieCard } from '../components/card/MovieCard';


// Add your theme color and text size here as used in MovieCard
const HomePageContainer = styled.div`
background: ${({ theme }) => theme.colors.primary.dark};
  color: white;
  min-height: 100vh;
  padding: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Function to pick 4 random movies
const getRandomMovies = (movies: Movie[], count: number): Movie[] => {
  const shuffled = [...movies].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Home Page Component
export const Home: React.FC<{ movies: Movie[] }> = () => {
  const { movies } = useMovies()
  const randomMovies = getRandomMovies(movies, 4); 

  return (
    <HomePageContainer>
      <h1>Featured Movies</h1>
      <h2>Grid View</h2>
      <GridContainer>
        {randomMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} variant="grid" />
        ))}
      </GridContainer>
      <h2>List View</h2>
      <ListContainer>
        {randomMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} variant="list" />
        ))}
      </ListContainer>
    </HomePageContainer>
  );
};
