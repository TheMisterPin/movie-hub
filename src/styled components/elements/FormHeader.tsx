import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary.dark};
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
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes.h3};
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  width: 90vw;
  text-align: center;
`;



interface FormNavbarProps {
  text: string;
}

const FormNavbar: React.FC<FormNavbarProps> = ({ text }) => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <BackButton onClick={() => navigate(-1)}>&lt;</BackButton>
      <Title>{text}</Title>
    </NavbarContainer>
  );
};

export default FormNavbar;