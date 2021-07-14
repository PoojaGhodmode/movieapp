import { useParams } from "react-router";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
//hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//Image
import NoImage from "../images/no_image.jpg";
import BreadCrumb from "./BreadCrumb";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, isLoading, error } = useMovieFetch(movieId);
  console.log(movie);
  if (isLoading) return <Spinner />;
  if (error) return <div>Something went wrong</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default Movie;
