import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 95%;
  height: 55px;
  background: var(--mediumGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);
  display: flex;
  align-items: center;

  img {
    height: 70%;
    margin-left: 1rem;
  }
  input {
    width: 84%;
    height: 40px;
    background: transparent;
    border: none;
    color: var(--white);
    font-size: 1.6rem;
    margin-left: 1rem;
    outline: none;
  }
`;
