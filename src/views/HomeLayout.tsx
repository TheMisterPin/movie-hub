import React from 'react';
import styled from 'styled-components';
import { Movie, useMovies } from '../context/MovieContext';
import { MovieCard } from '../components/card/MovieCard';
import NavBar from '../styled components/elements/NavBar';
import { RecentGrid } from '../components/homeContainers/FavoritesGrid';
import { PageContainer } from '../components/homeContainers/PageContainer';


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
export const HomeLayout: React.FC<{ movies: Movie[] }> = () => {
  const { movies } = useMovies()
  const randomMovies = getRandomMovies(movies, 4); 

  return (
    <PageContainer>
      <h1>Featured Movies</h1>
      <h2>Grid View</h2>
      <RecentGrid>
        {randomMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} variant="grid" />
        ))}
      </RecentGrid>
      <h2>List View</h2>
      <ListContainer>
        {randomMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} variant="list" />
        ))}
      </ListContainer>
      <NavBar/>
    </PageContainer>
  );
};
