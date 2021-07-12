import { useState, useEffect } from "react";
//API
import API from "../API";

const initialState = {
  page: 0,
  result: [],
  total_pages: 0,
  total_results: 0,
};
export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetehMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // initial render
  useEffect(() => {
    fetehMovies(1);
  }, []);
  return {
    state,
    loading,
    error,
  };
};
