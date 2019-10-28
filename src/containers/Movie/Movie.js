import React from 'react';
import './Movie.css';
import { connect } from 'react-redux';
import star from '../../images/MovieTracker_star.svg';
import starFav from '../../images/MovieTracker_star_fav.svg';

const Movie = ({ movie_id, title, poster_path, release_date, vote_average, overview, makeFavorite, currentUser, favorited, toggleStar }) => {

  const handleClick = async () => {
    await makeFavorite({
       movie_id: movie_id,
       title: title,
       poster_path: poster_path,
       release_date:release_date,
       vote_average: vote_average,
       overview:overview
     }, currentUser.id)
     console.log('movie_id222', movie_id)
    toggleStar(movie_id)
    console.log('toggleStar', toggleStar(movie_id))
  }

  return (
    <section className="grow">
      <div className="movie-img">
        <img className="poster-img" alt="Movie Poster" src = {`https://image.tmdb.org/t/p/original/${poster_path}`}/>
      </div>
      {toggleStar ? <img src={star} alt="Logo" className="movie-star" onClick={() => handleClick()}/> : <img src={starFav} alt="Logo" className="movie-star" onClick={() => handleClick()}/>}
      <div className="movie-text">
        <h3 className="movie-h3">{title}</h3>
      </div>
    </section>
  )
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  favorited: state.favorited
});

export default connect(mapStateToProps, null)(Movie);
