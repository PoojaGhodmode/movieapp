import PropTypes from "prop-types";
//styles
import { Wrapper, Image } from "./Cast.style";

const Cast = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character ? `as ${character}` : null}</p>
    </Wrapper>
  );
};

Cast.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Cast;
