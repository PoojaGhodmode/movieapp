//styles
import { Image } from "./Thumbnail.style";

const Thumbnail = ({ image, movieId, clickable }) => {
  return <div>
      <Image src={image} alt="movie-thumb" />
  </div>;
};

export default Thumbnail;
