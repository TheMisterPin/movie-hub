import  { useCallback, } from 'react';
import { useMovies } from '../context/MovieContext';
import { Movie } from '../types/MoviesContextType';
import { MovieCard } from '../components/card/MovieCard';

type LayoutVariant = 'grid' | 'list' | 'card' | 'full-screen';

interface MagicInput {
  layout: LayoutVariant;
}

export const useMagic = ({ layout }: MagicInput) => {
  const { movies } = useMovies();


  const renderMovies = useCallback(() => {

    const movieList = layout === 'full-screen' && movies.length > 0 ? [movies[0]] : movies;    
    return (
      <>
        {movieList.map((movie: Movie) => (
          <MovieCard
            variant={'card'}
            key={movie.id} 
            movie={movie}
          />
        ))}
      </>
    );
  }, [movies, layout]);

  return { renderMovies };
};