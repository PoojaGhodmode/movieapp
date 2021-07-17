import { useState, useEffect, useCallback } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

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
  }, [movieId]);
  useEffect(() => {
    const sessionState = isPersistedState(movieId);
    if (sessionState) {
      setState(sessionState);
      setIsLoading(false);
      return;
    }

    fetchData();
  }, [movieId, fetchData]);
  //write to sessioStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);
  return {
    state,
    isLoading,
    error,
  };
};
