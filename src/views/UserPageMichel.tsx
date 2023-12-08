import { PageContainer } from '../styled components/homeContainers/PageContainer'
import { UserMoviesContainer } from '../styled components/elements/FormElements';
import { PageTitle } from '../styled components'
import styled from 'styled-components'

import { EditComponent } from './EditComponent';
import { useAuth0 } from '@auth0/auth0-react';
import { HomeLayout } from './HomeLayout';
import NavBar from '../styled components/elements/NavBar';
import FormHeader from '../styled components/elements/FormHeader';
HomeLayout
const ProfilePageContainer = styled.div`
display: flex;
flex-direction: column;
gap: 3rem;
Padding: 2rem;
marginBottom: -2rem;
  `

const UserProfileImage = styled.img`
max-height: 100px;
max-width :100px;
border-radius: 40%`

export default function UserPageMichele() {
  const { logout } = useAuth0()

  return (

    <PageContainer>
      <ProfilePageContainer>
        <FormHeader text='TheMisterPin' />
        <PageTitle></PageTitle>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> <UserProfileImage src='https://xsgames.co/randomusers/avatar.php?g=male' />
          <EditComponent /></div>
        <UserMoviesContainer />
        <button onClick={() => logout()}>Logout</button>



      </ProfilePageContainer><NavBar /></PageContainer>
  )
}
