import React from 'react';
import { MovieCard } from '../components/card/MovieCard';
import { useMovies, Movie } from '../context/MovieContext';
import { ScrollableRowComponent } from '../components/homeContainers/ScrollableRow';



function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;


    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const Home: React.FC = () => {
  const { movies} = useMovies();

  const renderMovieSection = (sectionMovies: Movie[]) => {
    return sectionMovies.map((movie: Movie, index: number) => (
     
        <MovieCard
          variant="card"
          key={movie.id || index.toString()}
        
        />
    ));
  };


  const getRandomMovies = (count: number): Movie[] => {
    const shuffledMovies = shuffleArray([...movies]);
    return shuffledMovies.slice(0, count);
  };

  const sectionTitles: string[] = [
    'New Releases',
    'Classics',
    'Fan Favorites',
    'Award Winners',
    'Action Packed',
  ];

  return (
    <div>
      {sectionTitles.map((sectionTitle) => (
        <React.Fragment key={sectionTitle}>
          <h2>{sectionTitle}</h2>
          <ScrollableRowComponent>
            {renderMovieSection(getRandomMovies(5))}
          </ScrollableRowComponent>
        </React.Fragment>
      ))}
    </div>
  );
};
