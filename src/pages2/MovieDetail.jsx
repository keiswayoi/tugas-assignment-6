import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "c61fefee";

const MovieDetail = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const fetchMovieDetail = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${"c61fefee"}&i=${id}`
    );
    const data = await response.json();
    setMovie(data);
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <h1>{movie.Title}</h1>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
        alt={movie.Title}
      />
      <p>{movie.Plot}</p>
      <ul>
        <li><strong>Year:</strong> {movie.Year}</li>
        <li><strong>Director:</strong> {movie.Director}</li>
        <li><strong>Genre:</strong> {movie.Genre}</li>
        <li><strong>Runtime:</strong> {movie.Runtime}</li>
      </ul>
    </div>
  );
};

export default MovieDetail;
