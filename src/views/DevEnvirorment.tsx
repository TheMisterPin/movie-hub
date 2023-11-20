import  { useState } from 'react';
import { useMovies } from '../context/MovieContext';

export const TestComponent = () => {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');

  // Hardcoded movie and user data
  const [movieData] = useState({
    title: "2001: A Space Odyssey",
    description: "Directed by Stanley Kubrick, this cinematic masterpiece explores human evolution, artificial intelligence, and extraterrestrial life through a visually stunning and enigmatic narrative.",
    poster: "",
    genre: "Sci-Fi",
    length: 149,
    rating: 3.2,
    votes: 16,
    trailer: "",
    year: 1968
  });

  const [userData] = useState({
    id: 6,
    email: "SamJohnson@gmail.com",
    username: "MarvelousChemist48", 
  });

  const { fetchMovieByTitle, updateMovie, deleteMovie, updateUser, deleteUser } = useMovies();

  const handleFetchMovie = () => fetchMovieByTitle(title);
  const handleUpdateMovie = () => updateMovie(title, movieData);
  const handleDeleteMovie = () => deleteMovie(title);
  const handleUpdateUser = () => updateUser(username, userData);
  const handleDeleteUser = () => deleteUser(username);

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Movie Title" />
      <button onClick={handleFetchMovie}>Fetch Movie</button>
      <button onClick={handleUpdateMovie}>Update Movie</button>
      <button onClick={handleDeleteMovie}>Delete Movie</button>

      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  );
};

