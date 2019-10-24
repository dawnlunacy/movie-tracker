import React from 'react';
import './Movie.css';
import { connect } from 'react-redux';

const Movie = ({ id, title, poster, rating, overview }) => {
  return (
    <section className="movie">
      <h3>{title}</h3>
      <p>{rating}</p>
      <p>{overview}</p>
    </section>
  )
}

export default Movie;
