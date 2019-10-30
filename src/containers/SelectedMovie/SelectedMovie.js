import React from 'react';
import './SelectedMovie.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export const SelectedMovie = ({ selectedMovie }) => {
  return (
      <main className="selected-movie-container">
        <div className="selected-img-container">
          <img className="selected-img" alt="Movie Poster" src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}/>
        </div>
        <section className="selected-movie-info">
          <h2 className="selected-title">{selectedMovie.title}</h2>
          <div className="selected-synopsis">
            <h2>Synopsis</h2>
            <p>{selectedMovie.overview}</p>
          </div>
          <div>
            <h2>Rating</h2>
            <p>{selectedMovie.vote_average}/10</p>
          </div>
          <div>
            <h2>Release Date</h2>
            <p>{selectedMovie.release_date}</p>
          </div>
         </section>
      </main>
  )
}

export const mapStateToProps = state => ({
  selectedMovie: state.selectedMovie
});

export default connect(mapStateToProps, null)(SelectedMovie);

SelectedMovie.propTypes = {
  selectedMovie: PropTypes.object.isRequired
}