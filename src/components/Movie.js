import { useParams } from "react-router";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Cast from "./Cast";
//hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//Image
import NoImage from "../images/no_image.jpg";
import BreadCrumb from "./BreadCrumb";
import { useSimilarFetch } from "../hooks/useSimilarFetch";
import Button from "./Button";
import Thumbnail from "./Thumbnail";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, isLoading, error } = useMovieFetch(movieId);
  const {
    state: similarMovies,
    isSimilar,
    setIsSimilar,
    error: similarError,
    isLoading: similarLoading,
  } = useSimilarFetch(movieId);
  if (isLoading) return <Spinner />;
  if (error || similarError) return <div>Something went wrong</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <Button
        text={!isSimilar ? "See similar movies" : "Hide similar movies"}
        callback={() => setIsSimilar((prev) => !prev)}
      />
      {isSimilar && ((similarLoading && <Spinner/>) ||
        <Grid header="Similar movies">
          {similarMovies.results.map((movie) => (
            <Thumbnail
              clickable
              key={movie.id}
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
            />
          ))}
        </Grid>
      )}

      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header={"Cast"}>
        {movie.actors.map((actor) => (
          <Cast
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
            key={actor.credit_id}
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
