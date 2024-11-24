import React from "react";
const Movie = ({ movie }) => {
    console.log("Movie Data: ", movie); // Cek apakah data diterima
    return (
      <div className="movie">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
          alt={movie.Title}
        />
        <div className="movie-title">{movie.Title}</div>
      </div>
    );
  };
export default Movie;
