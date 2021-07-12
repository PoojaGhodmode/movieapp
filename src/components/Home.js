import { useState, useEffect } from "react";
//API
import API from "../API";
//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//components

//Hook
import { useHomeFetch } from "../hooks/useHomeFetch";
//Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const {state, loading, error} = useHomeFetch()
 
console.log(state);
  return <div className="home"></div>;
};

export default Home;
