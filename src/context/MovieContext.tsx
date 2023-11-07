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
  selectedMovie: Movie | null;
};


const MoviesContext = createContext<MoviesContextType>({
  movies: [],
  favorites: [],
  recents: [],
  fetchMovieByTitle: () => {},
  selectedMovie: null,
});

type ProviderProps = { children: ReactNode };

export const useMovies = () => useContext(MoviesContext);

export const MoviesProvider: React.FC<ProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

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

  const fetchMovieByTitle = (title: string): void => {
    fetch(`/movies/title/${title}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(`Movie with title "${title}":`, data);
        setSelectedMovie(data); 
      })
      .catch(error => {
        console.error(`Error fetching movie with title "${title}":`, error);
        setSelectedMovie(null);
      });
  };

  

 

 

  return (
    <MoviesContext.Provider value={{
      movies,
      favorites: movies,
      recents: movies,
      fetchMovieByTitle,
      selectedMovie
    }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;


// import React, { createContext, useContext, useState } from 'react';
// import moviesData from './movies.json'; 
// export type Movie = {
//   title: string;
//   rating: number;
//   votes: number;
//   description: string;
//   poster: string;
//   genre: string;
//   length: number;
//   trailer: string;
//   year: number;
// };

// export type MoviesContextType = {
//   movies: Movie[];
//   favorites: Movie[];
//   recents: Movie[];
//   // fetchMovieByTitle: (title: string) => void;
// };

// const MoviesContext = createContext<MoviesContextType>({
//   movies: [],
//   favorites: [],
//   recents: [],
//   // fetchMovieByTitle: () => {},
// });

// type ProviderProps = { children: React.ReactNode };

// export const useMovies = () => useContext(MoviesContext);

// export const MoviesProvider: React.FC<ProviderProps> = ({ children }) => {
//   const [movies] = useState<Movie[]>(moviesData);

//   // const fetchMovieByTitle = (title: string): void => {
//   //   // Fetch movie by title logic here
//   // };


//   return (
//     <MoviesContext.Provider value={{
//       movies,
//       favorites: movies.filter(movie => movie.rating > 8), // Example for favorites based on rating
//       recents: movies.slice(0, 5), // Example for recent movies
     
//     }}>
//       {children}
//     </MoviesContext.Provider>
//   );
// };

// export default MoviesProvider;