import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';
import { MoviesContextType, Movie, Genre, MovieData, User } from '../types/MoviesContextType'


const MoviesContext = createContext<MoviesContextType>({
  movies: [],
  genres: [],
  selectedGenre: null,
  selectedMovie: null,
  fetchMovieByTitle: async () => { },
  fetchGenreByName: async () => { },
  fetchMovies: async () => { },
  fetchGenres: async () => { },
  fetchMoviesByGenre: async () => { },
  uploadMovie: async () => { },
  deleteMovie: async () => { },
  updateMovie: async () => { },
});

type ProviderProps = { children: ReactNode }

export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (context === undefined) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
};

export const MoviesProvider: React.FC<ProviderProps> = ({ children }) => {
  // const { getIdTokenClaims } = useAuth0();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:2323/movies');
      if (!response)
      console.log('failed to connect to server');
    setMovies(response.data);
    
    

    } catch (error) {
      console.log('Failed to fetch movies:', error);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await axios.get('http://localhost:2323/genres')
      setGenres(response.data)
      if (!response) {
        console.log('failed to connect to server')
      }
      if (!response.data) { console.log('no data found') }
    }
    catch (error) {
      console.log('Failed to fetch genres', error)
    }
  }
  useEffect(() => {
    fetchGenres();
    console.log(genres)
    fetchMovies();
  },
    []
  )


  const fetchMoviesByGenre = async (genre: string) => {
    const encodedGenreName = encodeURIComponent(genre)
    const url = `http://localhost:2323/title/"${encodedGenreName}"`
    try {
      const response = await axios.get(url);
      if (!response)
        console.log('failed to connect to server');
      if (!response.data) { console.log('no data found') }
      setMovies(response.data)

    } catch (error) {
      console.log('Failed to fetch movies:', error)

    }
  }


  const fetchMovieByTitle = async (title: Movie['title']) => {
    const encodedTitle = encodeURIComponent(title)
    const url = `http://localhost:2323/title/${encodedTitle}`
    try {
      const response = await axios.get(url)
      console.log(`Movie with title "${title}":`, response.data)
      setSelectedMovie(response.data);
    } catch (error) {
      console.error(`Error fetching movie with title ${title}:`, error)
      setSelectedMovie(null)
    }
  };
  const fetchGenreByName = async (genre: string) => {
    const encodedGenreName = encodeURIComponent(genre)
    const url = `http://localhost:2323/title/"${encodedGenreName}"`
    try {
      const response = await axios.get(url);
      if (!response.data) {
        throw new Error(`No data found for genre "${genre}"`)
      }
      setSelectedGenre(response.data)
    } catch (error) {
      console.error(`Failed to fetch genre "${genre}":`, error)
      setSelectedGenre(null)
    }
  };
  const uploadMovie = async (username: User["username"], movieData: MovieData) => {
    const encodedUsername = encodeURIComponent(username)
    const baseUrl = `http://localhost:2323/upload/"${encodedUsername}"`
    try {
      const response = await axios.post(baseUrl, movieData, {

      });
      if (response) { console.log('Movie uploaded successfully!', response.data) }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Failed to upload movie:', error.response.data.message || 'Failed to upload movie');
      } else {
        console.error('Failed to upload movie:');
      }
    }
  };
  const deleteMovie = async (title: Movie['title']) => {
    const encodedTitle = encodeURIComponent(title);
    const url = `http://localhost:2323/movies/${encodedTitle}`;

    try {
      await axios.delete(url);
      console.log(`Movie with title "${title}" deleted successfully`);
    } catch (error) {
      console.error(`Error deleting movie with title "${title}":`, error);
    }
  };
  const updateMovie = async (title: Movie['title'], movieData: MovieData) => {
    const encodedTitle = encodeURIComponent(title)
    const url = `http://localhost:2323/movies/title/${encodedTitle}`

    try {
      const response = await axios.put(url, { movieData })
      console.log('Movie updated successfully!', response.data)
    } catch (error) {
      console.error(`Error updating movie with title "${title}":`, error)
    }
  };


  //USERS CURD


  return (
    <MoviesContext.Provider value={{
      genres,
      selectedGenre,
      movies,
      fetchMovies,
      deleteMovie,
      updateMovie,
      fetchGenres,
      fetchMoviesByGenre,
      fetchMovieByTitle,
      fetchGenreByName,
      selectedMovie,
      uploadMovie
    }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;