import styled from 'styled-components';

import { ScrollableRowComponent } from '../components/homeContainers/ScrollableRow';
import { useUsers } from '../context/UserContex';
import { PageTitle } from '../styled components';
import { useAuth0 } from '@auth0/auth0-react';
import { PageContainer } from '../components/homeContainers/PageContainer';
import { MovieCard } from '../components/card/MovieCard';
import { useState, ChangeEvent } from 'react';
styled

const UserImage = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 50%;`


const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content:space-around;
  color: white;
  min-height: 100vh;
 background: ${({ theme }) => theme.colors.primary.dark};
  padding: 20px;
  box-sizing: border-box;
  overflow: auto`


type Gender = 'male' | 'female' | '';

const UserProfileImage: React.FC = () => {
  const [gender, setGender] = useState<Gender>('');

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value as Gender);
  };

  const getImageSrc = (): string => {
    switch (gender) {
      case 'male':
        return 'https://xsgames.co/randomusers/avatar.php?g=male';
      case 'female':
        return 'https://xsgames.co/randomusers/avatar.php?g=female';
      default:
        return 'https://xsgames.co/randomusers/avatar.php?g=pixel';
    }
  };
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

  return (
    
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <form value={gender} onChange={handleGenderChange}>
        <input type="radio" name="gender" value="male"  /> 
        <input type="radio" name="gender" value="female" />
     <button>
        <img width="100" height="100" src="https://img.icons8.com/carbon-copy/100/FFFFFF/pencil.png" alt="pencil" /> </button>
      </form>
      {gender && <UserImage src={getImageSrc()} alt="User Profile" />}
    </div>
  );
};


const UserMoviesContainer = () => {
  const { userLogged } = useUsers();
  if (!userLogged) {
    return <p>Loading...</p>;
  }
 if (!userLogged.movies) {
    return <p>No movies uploaded yet</p>;
  }
if (userLogged.movies.length === 0) {
      return <p>No movies uploaded yet</p>;
    }
if (userLogged.movies.length > 0) {
      return (
        <div>
          <h3>your uploaded movies</h3>
          {userLogged.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} variant="card" />
          ))}
        </div>
      );
    }

  }
 
  
  const UserProfile = () => {
    const { userLogged } = useUsers();
    const { user } = useAuth0();

    if (!userLogged) {
      return <PageContainer>
        <p>Loading...</p>
      </PageContainer>;
    }

    return (

      <UserPageContainer>
        <PageTitle>{userLogged.username}</PageTitle>
        <div>
          <UserProfileImage />

        

        </div>
        <p>Email: {user?.email}</p>
        <ScrollableRowComponent>
          <UserMoviesContainer/>

        </ScrollableRowComponent>
      </UserPageContainer>

    );
  };

  export default UserProfile;