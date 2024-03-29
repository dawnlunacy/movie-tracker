import React from 'react';
import './Movie.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectMovie } from '../../actions';
import PropTypes from 'prop-types';
import star from '../../images/MovieTracker_star.svg';
import starFav from '../../images/MovieTracker_star_fav.svg';

export const Movie = ({ movie_id, title, poster_path, release_date, vote_average, overview, toggleFavorite, currentUser, favorited, toggleStar, selectMovie }) => {
  let isFavorite = favorited.find((favorite) => {
    return favorite.movie_id === movie_id
  });
  
  let starImg = isFavorite ? starFav : star;
  
  const handleClick = async () => {

    if (currentUser === null) {
      alert("Please Login or Sign Up to add to your favorites")
    } else {
      await toggleFavorite({
        movie_id: movie_id,
        title: title,
        poster_path: poster_path,
        release_date:release_date,
        vote_average: vote_average,
        overview:overview
      }, currentUser.id)
     toggleStar(movie_id)
   }
  }
    
  return (
    <section className="grow">
      <div className="movie-img">
        <img className="poster-img" alt="Movie Poster" src = {`https://image.tmdb.org/t/p/original/${poster_path}`}/>
      </div>
      <img src={starImg} alt="Logo" className="movie-star" onClick={() => handleClick()}/>
      <Link to={`movies/${movie_id}`}>
        <div className="movie-text" onClick={() => selectMovie({
          movie_id, title: title, poster_path, release_date, vote_average, overview})}>
          <h3 className="movie-h3">{title}</h3>
        </div>
      </Link>
    </section>
  )
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  favorited: state.favorited,
  selectMovie: state.selectMovie
});

export const mapDispatchToProps = dispatch => ({
  selectMovie: selectedMovie => dispatch(selectMovie(selectedMovie))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

Movie.propTypes = {
  favorited: PropTypes.array.isRequired,
  selectMovie: PropTypes.func.isRequired
}
