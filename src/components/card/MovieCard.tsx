import React from 'react';
import styled from 'styled-components';
import { StarRating } from '../../styled components/ui/StarRating';
import { Link } from 'react-router-dom';
import { useTimeFormatter } from '../../hooks/useTimeFormatterTester';


const showMore = "https://img.icons8.com/sf-regular-filled/96/21b2d3/more.png"


const extractYouTubeID = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11) ? match[2] : null;
};



// Movie type
export type Movie = {
  // id: string;
  title: string;
  year: number;
  genre: string;
  votes: number;
  length: number;
  rating: number;
  description: string;
  poster: string;
  trailer: string;
}

// MovieCard props
type MovieCardProps = {
  movie: Movie
  variant: "grid" | "list" | "card" | "fullscreen"
}

// Styled components
// const BaseCard = styled.div`
//   border-radius: 10px;
//   user-select: none;
//   background-color: #282828;
//   color: white;
//   margin: 0;
// `;


const Card = styled.li`


  color: white;
  border-radius: 10px;
  user-select: none;
  margin: (0.2rem 0 );
`;
const FullScreenCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  border-radius: 10px;
  user-select: none;
  margin: 0;
  width: 100vw;
  height: fit-content;

`;

const CardImage = styled.img`
  width: 25rem;
  border-radius: 8px;`
const FullScreenCardImage = styled.img`
  width: 15rem;
  border-radius: 8px;
  box-shadow: 
    0 4px 6px rgba(0,0,0,0.1),        
    0 1px 3px rgba(0,0,0,0.2),         
    inset 0 0 0 1px rgba(255,255,255,0.5), 
    inset 0 0 10px rgba(255,255,255,0.1);
`;
const BackgroundImage = styled.div<{ poster: string }>`

  position: absolute; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.poster}); // Get the poster URL from props
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.3)), to(rgba(0,0,0,0)));
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0));
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1; // Keep it behind all other content
`;
const BackgroundColorLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.primary.dark};
  z-index: -2;
  height: auto;
`;

const CardDescription = styled.div`
  width: 100%;
  padding: 0.4rem;
`;

const ListCard = styled(Card)`
  width: 85%;
  background-color: #6a6a6a;
  color: white;
  display: flex;
  border-radius: 10px;
  user-select: none;
  margin: 10px;
  padding: 0.2rem;
  box-shadow: 
  0 4px 6px rgba(0,0,0,0.1),        
  0 1px 3px rgba(0,0,0,0.2),         
  inset 0 0 0 1px rgba(255,255,255,0.5), 
  inset 0 0 10px rgba(255,255,255,0.1);
  
`;

const ListCardImage = styled(CardImage)`
  width: 25%;
`;

const ListCardDescription = styled(CardDescription)`
  padding: 0.4rem;
  width: 75vw;
  height: 25vw;
  font-size: 1rem;
  display: flex;
  flex-direction: column
`;

const GridCard = styled(Card)`
  height: 3rem;
  width: 10rem;
  display: flex;
  flex-direction: column;
  background-color: #6a6a6a;
  margin-top: 0.3rem;
  
`;

const GridCardImage = styled(CardImage)`
  height: 3rem;
  width: 2.3rem;
  
  
`;

const GridCardDescription = styled(CardDescription)`
margin-left: 0.4rem;
  padding: 0;
  position: relative; 
 
`;

const ListMovieTitle = styled.h3`
  white-space: nowrap;

 

`;
const MovieTitle = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;
const FullScreenMovieTitle = styled(MovieTitle)`
font-size: 2.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;
const GridMovieTitle = styled.h5`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

const FullscreenMovieDetails = styled.p`
  color: #aaaaaa;
  font-size: 1.5rem;
  margin: 5px 0;
  text-align:center;
`;
const MovieDetalis = styled.p`
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
  -webkit-box-orient: vertical;`

const StyledIFrame = styled.iframe`
  width: 100%;
  height: 200px; 
  border-radius: 8px;
  border: none`
const ShowMoreButton = styled(Link)`
background-image: url(${showMore};
background-color: ${({ theme }) => theme.colors.primary.dark}`

// Main MovieCard Component
export const MovieCard: React.FC<MovieCardProps> = ({ movie, variant = "card" }) => {
  const formatMinutes = useTimeFormatter();
  const formattedLength = movie.length ? formatMinutes(movie.length) : null;
  const videoID = movie.trailer ? extractYouTubeID(movie.trailer) : '';
  const DetailsComponent = variant === "fullscreen" ? FullscreenMovieDetails : MovieDetalis;
  const CardComponent = variant === "grid" ? GridCard : variant === "list" ? ListCard : FullScreenCard;
  const ImageComponent = variant === "grid" ? GridCardImage : variant === "list" ? ListCardImage : FullScreenCardImage;
  const DescriptionComponent = variant === "grid" ? GridCardDescription : variant === "list" ? ListCardDescription : CardDescription;
  const TitleComponent = variant === "grid" ? GridMovieTitle : variant === "list" ? ListMovieTitle : FullScreenMovieTitle;

  if (!movie) return null;

  return (
    <>
      {variant === "fullscreen" && (
        <>
          <BackgroundColorLayer />
          <BackgroundImage poster={movie.poster} />
        </>
      )}
      <CardComponent>
        
        <ImageComponent src={movie.poster} alt={movie.title} />
        
        <DescriptionComponent>
          <TitleComponent>{movie.title}</TitleComponent>
          {variant !== "fullscreen" && (
            <>
              <DetailsComponent>{movie.genre}</DetailsComponent>
              <DetailsComponent>{movie.year} {formattedLength}</DetailsComponent>
              <DetailsComponent>Rating: {movie.rating}</DetailsComponent>
              <ShowMoreButton to={`/movies/${movie.title}`} />
            </>
          )}
          {variant === "fullscreen" && (
            <>
              <FullscreenMovieDetails>{movie.genre} {movie.year} {formattedLength}</FullscreenMovieDetails>
              <StarRating rating={movie.rating} votes={movie.votes} />
              <MovieDescription>{movie.description}</MovieDescription>
              <StyledIFrame
                title="movie-trailer"
                src={`https://www.youtube.com/embed/${videoID}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </>
          )}
        </DescriptionComponent>
      </CardComponent>
    </>
  );
};