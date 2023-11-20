import React from 'react';
import styled from 'styled-components';
import { useMovies } from '../context/MovieContext';
import {  Genre, Movie } from '../types/MoviesContextType';
import { MovieCard } from '../components/card/MovieCard';
import NavBar from '../styled components/elements/NavBar';
// import { RecentGrid } from '../components/homeContainers/FavoritesGrid';
import { PageContainer } from '../components/homeContainers/PageContainer';
import { ScrollableRowComponent } from '../components/homeContainers/ScrollableRow';

import { useNavigate } from 'react-router-dom'; // Importing useNavigate

const GenreButton = styled.button<{ style?: React.CSSProperties }>`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  width: 35%;
  border-radius: 23px;
  min-height: 100px;
  background-size: cover;
  background-position: center;
  cursor: pointer; /* To make it look clickable */
`;

const GenreCardContent = styled.span`
  color: white;
  font-size: 7 rem;
`;

const GenreCard = (props: { genre: string, image: string }) => {
  const navigate = useNavigate();

  const navigateToGenre = () => {
    navigate(`/genres/${props.genre}`);
  };

  const buttonStyle = {
    backgroundImage: `url(${props.image})`,
  };

  return (
    <GenreButton style={buttonStyle} onClick={navigateToGenre}>
      <GenreCardContent>{props.genre}</GenreCardContent>
    </GenreButton>
  );
};

export const HomeLayout: React.FC = () => {
  const { movies, genres } = useMovies() 
  function getRandomMovies(arr: Movie[], count: number): Movie[] {    
    const arrayCopy = [...arr];
    const result: Movie[] = [];
    for (let i = 0; i < Math.min(count, arrayCopy.length); i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      result.push(arrayCopy[randomIndex]);
      arrayCopy.splice(randomIndex, 1); // Remove the selected movie
    }
    return result;
  }

  const listOne: Movie[] = getRandomMovies(movies, 5);
  const listTwo: Movie[] = getRandomMovies(movies, 5);
  const listThree: Movie[] = getRandomMovies(movies, 5);
  const listFour: Movie[] = getRandomMovies(movies, 5);


  

 
  

  return (
    <PageContainer>

      <h1>MovieHub</h1>
     

      <h2>Dicover Categories</h2>
      <ScrollableRowComponent>
        {genres.map((genre: Genre) => (
          <GenreCard key={genre.genre} genre={genre.genre}   image={genre.image} />        
        ))}
      </ScrollableRowComponent>
      <h2>Hot Right Now</h2>
      <ScrollableRowComponent>
        {listOne.map((movie) => (
          <MovieCard key={movie.id} movie={movie} variant="card" />
        ))}
      </ScrollableRowComponent>
      <h2>Blanket and Movie? </h2>
      <ScrollableRowComponent>
        {listTwo.map((movie) => (
          <MovieCard key={movie.id} movie={movie} variant="card" />
        ))}
      </ScrollableRowComponent>
      <h2> Classics </h2>
      <ScrollableRowComponent>
        {listThree.map((movie) => (
          <MovieCard key={movie.id} movie={movie} variant="card" />
        ))}
      </ScrollableRowComponent>
      <h2> Jump Right in! </h2>
      <ScrollableRowComponent>
        {listFour.map((movie) => (
          <MovieCard key={movie.id} movie={movie} variant="card" />
        ))}
      </ScrollableRowComponent>
      <NavBar/>
    </PageContainer>
  );
};
