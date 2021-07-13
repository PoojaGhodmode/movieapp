import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  border: none;
  height: 60px;
  width: 25%;
  min-width: 350px;
  padding: 0.5rem 5rem;
  font-size: var(--fontMedium);
  color: white;
  border-radius: 30px;
  margin: 1.5rem auto;
  transition: opacity 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
