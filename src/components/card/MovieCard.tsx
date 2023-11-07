

import React from 'react';
import styled from 'styled-components';
import { StarRating } from '../../styled components/ui/StarRating';
import { Link } from 'react-router-dom';
const showMore = "https://img.icons8.com/sf-regular-filled/96/21b2d3/more.png"
// Movie type
export type Movie = {
  id: string;
  title: string;
  year: number;
  votes: number;
  rating: number;
  description: string;
  poster: string;
  trailer: string;
}

// MovieCard props
type MovieCardProps = {
  movie?: Movie
  variant?: "grid" | "list" | "card" | "fullscreen"
}

// Styled components


const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #282828;
  color: white;
  border-radius: 10px;
  padding: 15px;
  width: 10rem;
  min-width: 10rem;
  margin: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const CardDescription = styled.div`
  width: 100%;
  padding: 0.4rem;
`;

const ListCard = styled(Card)`
  width: 85%;
  flex-direction: row;
  align-items: center;
  background-color: #6a6a6a;
  color: white;
  border-radius: 10px;
  user-select: none;
  margin: 10px;
`;

const ListCardImage = styled(CardImage)`
  width: 25%;
`;

const ListCardDescription = styled(CardDescription)`
  padding: 0.4rem;
  position: relative;
  width: 75vw;
  height: 25vw;
  font-size: 1.5rem;
`;

const GridCard = styled(Card)`
  height: 15vw;
  flex-direction: row;
  background-color: #6a6a6a;
  margin: 10px;
`;

const GridCardImage = styled(CardImage)`
  width: 15vw;
`;

const GridCardDescription = styled(CardDescription)`
  padding: 0.4rem;
  position: relative;
  width: 25vw;
  height: 15vw;
`;

const MovieTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

const MovieYearRating = styled.p`
  color: #aaaaaa;
  font-size: 12px;
  margin: 5px 0;
`;
const MovieDescription = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #aaaaaa;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; // Adjust number of lines as needed
  -webkit-box-orient: vertical;`
  
const StyledIFrame = styled.iframe`
  width: 100%;
  height: 200px; // Adjust height as needed for mobile
  border-radius: 8px;
  border: none` 
const ShowMoreButton = styled(Link)`
background-image: url(${showMore};
background-color: ${({ theme }) => theme.colors.primary.dark}`

// Main MovieCard Component
export const MovieCard: React.FC<MovieCardProps> = ({ movie, variant = "card" }) => {
  const CardComponent = variant === "grid" ? GridCard : variant === "list" ? ListCard : Card;
  const ImageComponent = variant === "grid" ? GridCardImage : variant === "list" ? ListCardImage : CardImage;
  const DescriptionComponent = variant === "grid" ? GridCardDescription : variant === "list" ? ListCardDescription : CardDescription;
  if (!movie) return null;
  return (
    <CardComponent>
      <ImageComponent src={movie.poster} alt={movie.title} />
      <DescriptionComponent>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieYearRating>{movie.year} - Rating: {movie.rating}</MovieYearRating>
        <ShowMoreButton to={`/movies/${movie.id}`}>Show More</ShowMoreButton>
        
        {variant === "fullscreen" && (
          <>
            <StyledIFrame
              title="movie-trailer"
              src={`https://www.youtube.com/embed/${movie.trailer}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <MovieDescription>{movie.description}</MovieDescription>
            <StarRating rating={movie.rating} votes={movie.votes} />
            
          </>
        )}
      </DescriptionComponent>
    </CardComponent>
  );
};