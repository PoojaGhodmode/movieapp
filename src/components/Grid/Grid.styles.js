import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    color: var(--mediumGray);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
`;
export const Content = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 2rem;
  @media screen and (max-width:768px){
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;
