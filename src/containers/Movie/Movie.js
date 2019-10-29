import React from 'react';
import './Movie.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectMovie } from '../../actions';
import star from '../../images/MovieTracker_star.svg';
import starFav from '../../images/MovieTracker_star_fav.svg';

const Movie = ({ movie_id, title, poster_path, release_date, vote_average, overview, toggleFavorite, currentUser, favorited, toggleStar, selectedMovie }) => {
  
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

  const chooseMovie = ({ selectedMovie }) => {
    selectMovie({selectedMovie})
  }
  
  
  return (
    <section className="grow">
      <div className="movie-img">
        <img className="poster-img" alt="Movie Poster" src = {`https://image.tmdb.org/t/p/original/${poster_path}`}/>
      </div>
      <img src={starImg} alt="Logo" className="movie-star" onClick={() => handleClick()}/>
      {/* <Link to={`movies/${movie_id}`}> */}
        <div className="movie-text" onClick={() => chooseMovie()}>
          <h3 className="movie-h3">{title}</h3>
        </div>
      {/* </Link> */}
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
