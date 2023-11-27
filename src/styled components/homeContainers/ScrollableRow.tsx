import React, { ReactNode } from "react";
import styled from "styled-components";

const ScrollableRow = styled.ul`
  display: flex;
  flex-directio: row;
  padding-inline-start: 0px;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  list-decoration: none;
  scrollbar-width: none;
  -ms-overflow-style: none;
  gap: 1rem
`


interface ScrollableRowProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export const ScrollableRowComponent: React.FC<ScrollableRowProps> = ({
  children,
}) => {
  return <ScrollableRow>{children}</ScrollableRow>;
};// import { LoginForm } from '../components/forms/LoginForm';

export function getRandomMovies(arr: Movie[], count: number): Movie[] {
  const arrayCopy = [...arr];
  const result: Movie[] = [];
  for (let i = 0; i < Math.min(count, arrayCopy.length); i++) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    result.push(arrayCopy[randomIndex]);
    arrayCopy.splice(randomIndex, 1);
  }
  return result;
}

