import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  h3 {
    margin-top: 10px;
  }
  p {
    margin: 5px 0;
  }
`;
export const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px;
  height: 200px;
  object-fit: cover;
`;
