import { useState, useEffect , useCallback} from "react";
import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(false);

      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      // console.log(credits);
      //get director only

      const directors = credits.crew.filter(
        (member) => member.job === "Director"
      );

      setState({
        ...movie,
        actors: credits.cast,
        directors,
      });

      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  },[movieId]);
  useEffect(() => {
    fetchData();
  }, [movieId,fetchData]);
  return {
    state,
    isLoading,
    error,
  };
};
