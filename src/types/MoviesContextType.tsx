export type Genre = {
  genre: string;
  movies: Movie[];
  image: string;
};
export interface User {
  email: string;
  userId?: string;
  username: string;
}


export type Movie = {
  id: string;
  title: string;
  rating: number;
  votes: number;
  description: string;
  poster: string;
  genre: Genre["genre"];
  length: number;
  trailer: string;
  year: number;
};
export type MovieData = {
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
  genres: Genre[];
  selectedMovie: Movie | null;
  selectedGenre: Genre | null;
  fetchMovies: () => Promise<void>;
  fetchGenres: () => Promise<void>;
  fetchMoviesByGenre: (genre: Genre["genre"]) => Promise<void>;
  fetchMovieByTitle: (title:Movie['title']) => Promise<void>;
  fetchGenreByName: (title:Movie['title']) => Promise<void>;
  uploadMovie: (username: User["username"], movieData: MovieData) => Promise<void>;
  deleteMovie: (title:Movie['title']) => Promise<void>;
  updateMovie: (title:Movie['title'], moviedata: MovieData) => Promise<void>;
 
};


export type ProviderProps= { 
  children: React.ReactNode;
}
