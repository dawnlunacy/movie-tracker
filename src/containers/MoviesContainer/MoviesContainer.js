import React from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import './MoviesContainer.css'

const MoviesContainer = () => {
  return (
    <main>
      <Movie />
    </main>
  )
}

export default MoviesContainer;
