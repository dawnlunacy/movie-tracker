import React from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import './MoviesContainer.css'

const MoviesContainer = ({ movies, errorMessage }) => {
  const moviesToDisplay = movies.map(movie => {
    const { id, title, poster, rating, overview } = movie
    return <Movie 
      key = {id}
      id = {id}
      title = {title}
      poster = {poster}
      rating = {rating}
      overview = {overview}
    />
  })

  return (
    <main>
      {/* <p>{errorMessage}</p> */}
      {errorMessage && <p>{errorMessage}</p>}
      {moviesToDisplay}
    </main>
  )
}

const mapStateToProps = state => ({
  errorMessage: state.errorMessage
});

export default connect(mapStateToProps, null)(MoviesContainer);

