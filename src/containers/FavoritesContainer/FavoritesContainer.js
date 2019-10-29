import React from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import './FavoritesContainer.css'

export const FavoritesContainer = ({ favorites, errorMessage, toggleFavorite, toggleStar }) => {
  console.log("FAVORITES", favorites)
  const moviesToDisplay = favorites.map(movie => {
    const { movie_id, title, poster_path, release_date, vote_average, overview } = movie
    return <Movie
      key = {title}
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
  favorites: state.favorited,
  errorMessage: state.errorMessage
});

export default connect(mapStateToProps, null)(FavoritesContainer);
