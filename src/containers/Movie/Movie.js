import React from 'react';
import './Movie.css';
import { connect } from 'react-redux';
import star from '../../images/MovieTracker_star.svg';
import starFav from '../../images/MovieTracker_star_fav.svg';
import { Link } from 'react-router-dom';

const Movie = ({ movie_id, title, poster_path, release_date, vote_average, overview, toggleFavorite, currentUser, favorited, toggleStar }) => {

  let isFavorite = favorited.find((favorite) => {
    return favorite.movie_id === movie_id
  });
  let starImg = isFavorite ? starFav : star;

  const handleClick = async () => {
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

  return (
    <Link to={`movies/${movie_id}`}>
    <section className="grow">
      <div className="movie-img">
        <img className="poster-img" alt="Movie Poster" src = {`https://image.tmdb.org/t/p/original/${poster_path}`}/>
      </div>
      <img src={starImg} alt="Logo" className="movie-star" onClick={() => handleClick()}/>
      <div className="movie-text">
        <h3 className="movie-h3">{title}</h3>
      </div>
    </section>
    </Link>
  )
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  favorited: state.favorited
});

export default connect(mapStateToProps, null)(Movie);
