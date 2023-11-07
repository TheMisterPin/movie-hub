import { useState } from "react";
import { LandingForm } from "../components/forms/LandingForm"
import styled from 'styled-components';
import { LoginForm } from "../components/forms/LoginForm";
import { SignUpForm } from "../components/forms/SignUpForm";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color:  ${({ theme }) => theme.colors.primary.dark};`




  export const Landing = () => {
    const [currentForm, setCurrentForm] = useState('landing'); 
  
    const renderForm = () => {
      switch (currentForm) {
        case 'login':
          return <LoginForm />;
        case 'register':
          return <SignUpForm />;
        default:
          return <LandingForm setCurrentForm={setCurrentForm} />;
      }
    };
  
    return (
      <LandingContainer>
        {renderForm()}
      </LandingContainer>
    );
  };
  

