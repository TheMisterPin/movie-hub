import styled from 'styled-components';

import { ScrollableRowComponent } from '../styled components/homeContainers/ScrollableRow';
import { useUsers } from '../context/UserContex';
import { PageTitle } from '../styled components';
import { useAuth0 } from '@auth0/auth0-react';
import { PageContainer } from '../styled components/homeContainers/PageContainer';
import { Movie } from '../components/card/MovieCard';
import { useState, ChangeEvent } from 'react';


import { UserMoviesContainer } from '../styled components/elements/FormElements';
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



export const UserProfileImage: React.FC = () => {
  
  type Gender = 'male' | 'female' | '';
const [gender, setGender] = useState<Gender>('');

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value as Gender);
  };

  const getImageSrc = (): string => {
    switch (gender) {
      case 'male':
        return ;
      case 'female':
        return 'https://xsgames.co/randomusers/avatar.php?g=female';
      default:
        return 'https://xsgames.co/randomusers/avatar.php?g=pixel';
    }
  };
 
  return (
    
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div value={gender} onChange={handleGenderChange}>
        <input type="radio" name="gender" value="male"  /> 
        <input type="radio" name="gender" value="female" /> </div>
  
     
      {gender && <UserImage src={getImageSrc()} alt="User Profile" />}
    </div>
  );
};


  const UserProfile = () => {
    const { userLogged } = useUsers();
    const { user } = useAuth0();

    if (!userLogged) {
      return <PageContainer>
      <UserPageMichele/>
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
  
  
  
  
  
  
