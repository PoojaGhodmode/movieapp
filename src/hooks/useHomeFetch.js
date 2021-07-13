import { useState, useEffect } from "react";
//API
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};
export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const fetehMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setIsLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  // initial render
  useEffect(() => {
    fetehMovies(1);
  }, []);
  return {
    state,
    isLoading,
    error,
    setSearchTerm,
  };
};
