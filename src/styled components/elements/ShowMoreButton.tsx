import React from 'react';
import styled from 'styled-components';
import { Movie } from '../../components/card/MovieCard';





const ShowMore = styled.button`
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;


interface MovieItemProps {
  movie: Movie;
  onClick: () => Promise<void>;
  children: React.ReactNode;
}

export const ShowMoreButton: React.FC<MovieItemProps> = ({  onClick, children }) => {
  



  return (
    <ShowMore onClick={onClick}>{children}</ShowMore>
      
   
  );
};

