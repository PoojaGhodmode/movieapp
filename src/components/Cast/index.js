//styles

import { Wrapper, Image } from "./Cast.style";

const Cast = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>as {character}</p>
    </Wrapper>
  );
};

export default Cast;
