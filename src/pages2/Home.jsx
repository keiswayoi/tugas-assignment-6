import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "../pages/Movie";
import Search from "../pages/Search";

const API_KEY = "c61fefee";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies("Guardians of the Galaxy");
  }, []);

  const fetchMovies = async (query) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${"c61fefee"}&s=${query}`
    );
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  const handleSearch = (query) => {
    if (!query.trim()) return;
    fetchMovies(query);
  };

  return (
    <div>
      <Search search={handleSearch} />
      <div className="movie-container">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
            <Movie movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
