import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { HOME, LANDING } from '../../router/routes';

const backIcon="https://img.icons8.com/material-sharp/96/21b2d3/circled-chevron-left.png" 

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary.soft};
  color: ${({ theme }) => theme.colors.text.white};
  width: 100%;
  height: 50px;
  display: flex;

  align-items: center;
  padding: 0 10px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const BackButton = styled.button`
  border: none;
  cursor: pointer;
  background-image: url(${backIcon});
  height: 48px;
  width: 48px;
  background-size: contain;
  background-color: transparent;
  &:hover {
    opacity: 0.8;
  }
`;
const Title = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes.cardTitle};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  width: 90vw;
  text-align: center;
`;



interface FormHeaderProps {
  text: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ text }) => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <BackButton onClick={() => navigate(HOME)}>&lt;</BackButton>
      <Title>{text}</Title>
    </NavbarContainer>
  );
};

export default FormHeader;