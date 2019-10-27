import React from 'react';
import './Movie.css';
// import { connect } from 'react-redux';
import star from '../../images/MovieTracker_star.svg';

const Movie = ({ id, title, poster, rating, overview }) => {
  return (
    <section className="grow">
      <div className="movie-img">
        <img className="poster-img" alt="Movie Poster" src = {`https://image.tmdb.org/t/p/original/${poster}`}/>
      </div>
      <img src={star} alt="Logo" className="movie-star"/>
      <div className="movie-text">
        <h3 className="movie-h3">{title}</h3>
      </div>
    </section>
  )
}

export default Movie;

