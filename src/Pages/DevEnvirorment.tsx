import{ useState } from 'react';
import styled from 'styled-components';
import {Home} from './Home';
import {Landing} from './Landing';
import MovieDetails from './MovieDetails';
import UserProfile from './UserProfile';
import { LoginForm } from '../components/forms/LoginForm';
import { SignUpForm } from '../components/forms/SignUpForm';



const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #282828;
`;

const MobileMockup = styled.div`
  width: 375px;
  height: 667px;
  border: 1px solid #000;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

// HomeScreen component
const HomeScreen = () => {
    type ComponentMap = {
        Home: JSX.Element;
        Landing: JSX.Element;
        LoginPage: JSX.Element;
        SignUpPage: JSX.Element;
        MovieDetails: JSX.Element;
        UserProfile: JSX.Element;
      };
      
      const components: ComponentMap = {
        Home: <Home />,
        Landing: <Landing />,
        LoginPage: <LoginForm />,
        SignUpPage: <SignUpForm />,
        MovieDetails: <MovieDetails />,
        UserProfile: <UserProfile />
      };
      
      const [activeComponent, setActiveComponent] = useState<keyof ComponentMap>('Home');

  
  // Function to change the active component
  const handleSetActiveComponent = (componentName: keyof ComponentMap) => {
    setActiveComponent(componentName);
  };

  return (
    <Container>
      {/* ... */}
      <div>
        {Object.keys(components).map((componentName) => (
          <Button
            key={componentName}
            onClick={() => handleSetActiveComponent(componentName as keyof ComponentMap)}
          >
            {componentName}
          </Button>
        ))}
      </div>
      <MobileMockup>
        {/* Render the active component */}
        {components[activeComponent]}
      </MobileMockup>
    </Container>
  );
};

export default HomeScreen;