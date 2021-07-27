import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useSimilarFetch = (movieId) => {
  const [isSimilar, setIsSimilar] = useState(false);
  const [isLoading, SetIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const fetchData = async (movieId) => {
      try {
        // const similarMovies = "this are similar movies";
        SetIsloading(true);
        setError(false);
        const similarMovies = await API.fetchSimilarMovies(movieId);
        setState(similarMovies);
        SetIsloading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData(movieId);
  }, [movieId, isSimilar, error]);

  return {
    state,
    isSimilar,
    setIsSimilar,
    error,
    isLoading,
  };
};
