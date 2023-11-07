import { RatingContainer, StarContainer, ReviewCount,filledStar, halfStar, emptyStar } from './StarRatingComponents';

interface StarRatingProps {
  rating: number;
  votes: number;
}

export function StarRating({ rating, votes }: StarRatingProps) {
  const fullStarsCount = Math.max(0, Math.floor(rating)); 
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStarsCount = Math.max(0, Math.min(5 - fullStarsCount - (hasHalfStar ? 1 : 0), 5));
Array(fullStarsCount).fill(<img src={filledStar} alt="Filled Star" />)
Array(hasHalfStar ? 1 : 0).fill(<img src={halfStar} alt="Half Star" />)
Array(emptyStarsCount).fill(<img src={emptyStar} alt="Empty Star" />)

  return (
    <RatingContainer title={`Rating: ${rating} (${votes} votes)`}>
      <StarContainer>
        {Array(fullStarsCount)
          .fill(<img src={filledStar} alt="Filled Star" />)
          .map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        {hasHalfStar && <img src={halfStar} alt="Half Star" />}
        {Array(emptyStarsCount)
          .fill(<img src={emptyStar} alt="Empty Star" />)
          .map((star, index) => (
            <span key={`empty-${index}`}>{star}</span>
          ))}
      </StarContainer>
      <ReviewCount>({votes} reviews)</ReviewCount>
    </RatingContainer>
  );
}