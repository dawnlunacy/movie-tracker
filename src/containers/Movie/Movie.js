import React from 'react';
import './Movie.css';
import { connect } from 'react-redux';
import star from '../../images/MovieTracker_star.svg';

const Movie = ({ movie_id, title, poster_path, release_date, vote_average, overview, makeFavorite, currentUser }) => {
  
  const movieInfo = {
    movie_id,
    title,
    poster_path,
    release_date,
    vote_average,
    overview
  }

  return (
    <section className="grow">
      <div className="movie-img">
        <img className="poster-img" alt="Movie Poster" src = {`https://image.tmdb.org/t/p/original/${poster_path}`}/>
      </div>
      <img src={star} alt="Logo" className="movie-star" onClick={() => makeFavorite(movieInfo, currentUser.id)}/>
      <div className="movie-text">
        <h3 className="movie-h3">{title}</h3>
      </div>
    </section>
  )
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps, null)(Movie);
