import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Movie = {
  id: string;
  title: string;
  rating: number;
  votes: number;
  description: string;
  poster: string;
  genre: string;
  length: number;
  trailer: string;
  year: number;
};

export type MoviesContextType = {
  movies: Movie[];
  favorites: Movie[];
  recents: Movie[];
  fetchMovieByTitle: (title: string) => void;
};


const MoviesContext = createContext<MoviesContextType>({
  movies: [],
  favorites: [],
  recents: [],
  fetchMovieByTitle: () => Promise.resolve(),
});

type ProviderProps = { children: ReactNode };

export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  

  const fetchMovieByTitle = (title: string): void => {
    fetch(`/movies/title/${title}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => console.log(`Movie with title "${title}":`, data))
      .catch(error => console.error(`Error fetching movie with title "${title}":`, error));
  };
  
  // Usage:
 

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:2323/movies');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data); 
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{
      movies,
      favorites: movies,
      recents: movies,
      fetchMovieByTitle,
    }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;