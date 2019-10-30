import React from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './MoviesContainer.css'

export const MoviesContainer = ({ movies, errorMessage, toggleFavorite, toggleStar }) => {
  const moviesToDisplay = movies.map(movie => {
    const { movie_id, title, poster_path, release_date, vote_average, overview } = movie;
    return <Movie
      key = {movie_id}
      movie_id = {movie_id}
      title = {title}
      poster_path = {poster_path}
      release_date = {release_date}
      vote_average = {vote_average}
      overview = {overview}
      toggleFavorite = {toggleFavorite}
      toggleStar = {toggleStar}
    />
  })

  return (
    <div className="scroll-wrapper">
      <main className="movies-container">
        {errorMessage && <p>{errorMessage}</p>}
        {moviesToDisplay}
      </main>
    </div>
  )
}

export const mapStateToProps = state => ({
  movies: state.movies,
  errorMessage: state.errorMessage
});

export default connect(mapStateToProps, null)(MoviesContainer);

MoviesContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  errorMessage: PropTypes.string.isRequired,
  toggleFavorite: PropTypes.func.isRequired
}