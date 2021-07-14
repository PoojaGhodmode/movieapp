import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;
  .rating-director {
    display: flex;
    justify-content: flex-start;
    gap: 3rem;
    margin-top: 1rem;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
    background: white;
    color: #000;
  }
  .director {
    margin-right: 40px;
    p {
      margin: 0;
    }
  }

  h1 {
    font-size: var(--fontLarge);
    font-weight: 900;
    padding: 1rem 0;
    border-bottom: 2px solid white;
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
  h3 {
      font-size: var(--fontBig);
      font-weight: 900;
      @media screen and (max-width: 768px) {
        font-size: var(--fontMedium);
      }
    }

  h1,
  p,
  h3 {
    margin-bottom: 0.5em;
  }
`;
