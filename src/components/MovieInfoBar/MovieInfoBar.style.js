import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: var(--darkGrey);
  align-items: center;
  min-height: 100px;
  padding: 0 20px;
  justify-content: center;
`;

export const Content = styled.div`
  margin: 1rem;
  width: 100%;
  max-width: var(--maxWidth);
  display: flex;
  justify-content: space-evenly;

  .column {
    background: var(--mediumGrey);
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
  }
  .column p {
    font-size: var(--fontMedium);
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    .column p {
      font-size: var(--fontSmall);
    }
  }
`;
