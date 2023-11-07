import styled from "styled-components";


export const filledStar = "https://img.icons8.com/office/40/filled-star--v1.png";
export const halfStar = "https://img.icons8.com/office/40/star-half.png";
export const emptyStar = "https://img.icons8.com/office/40/star--v1.png";

export const HalfStarIcon = styled.img`
    border: none;
    height: 1rem;
    width: 1rem;
    background-image: url(${halfStar});
    background-size: cover;
  `;
export const StarIcon = styled.img`
    border: none;
    height: 10rem;
    width: 10rem;
    background-image: url(${filledStar});
    background-size: cover;
  `;
export const EmptyStarIcon = styled.img`
    border: none;
    height: 1rem;
    width: 1rem;
    background-image: url(${emptyStar});
    background-size: cover;
    backgound-color: transparent;
  `;
export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem; /* adjust the gap as needed */
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;
export const StarContainer = styled.span`
  display: flex;
  align-items: center;
`;
export const ReviewCount = styled.span`
  // Add styles for review count text if necessary
`;

