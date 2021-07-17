import { useState, useEffect } from "react";
//API
import API from "../API";
import { isPersistedState } from "../helpers";

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
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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

  // initial and search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");
      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    setState(initialState);
    fetehMovies(1, searchTerm);
  }, [searchTerm]);

  //loadmore
  useEffect(() => {
    if (!isLoadingMore) return;
    fetehMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  //write to session storage
  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);
  return {
    state,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  };
};
