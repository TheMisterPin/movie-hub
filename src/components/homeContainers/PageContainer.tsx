import styled from "styled-components";

// Add your theme color and text size here as used in MovieCard


export const PageContainer = styled.div`
background: ${({ theme }) => theme.colors.primary.dark};
position: relative;
  color: white;
  min-height: 100vh;
  max-height: 100vh;
  overflow: auto;
  padding: 20px;
  padding: 0;
 
`;
