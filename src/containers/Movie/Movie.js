import React from 'react';
import './Movie.css';
import { connect } from 'react-redux';

const Movie = ({ id, title, poster, rating, overview }) => {
  return (
    <section className="movie">
      <div className="movie-img">
      </div>
      <h3 className="movie-h3">{title}</h3>
    </section>
  )
}

export default Movie;

// <p>{rating}</p>
// <p>{overview}</p>
