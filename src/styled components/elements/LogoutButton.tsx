import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styled from 'styled-components';


// Styled button component
const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d32f2f;
  }

  &:active {
    background-color: #b71c1c;
  }
`;

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0(); // Destructure the logout function from the context

  return (
    <StyledButton onClick={() => logout()}>Logout</StyledButton>
  );
};

export default LogoutButton;