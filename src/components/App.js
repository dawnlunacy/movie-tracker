import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesContainer from '../containers/MoviesContainer/MoviesContainer';
import Nav from '../containers/Nav/Nav';
import UserForm from '../containers/UserForm/UserForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies, handleError, isLoading } from '../actions';
import { fetchData } from '../utils/apiCall';
import { filteredMovieData } from '../utils/helpers';
import './App.css';


class App extends Component {

  async componentDidMount() {
    const { getMovies, handleError, isLoading } = this.props

    try {
      isLoading(true)
      const movies = await fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56')
      const cleanMovies = filteredMovieData(movies.results)
      isLoading(false)
      getMovies(cleanMovies)
    } catch {
      isLoading(false)
      handleError('There was an error getting your movies!')
    }
  }

  render() {
    const { movies, errorMessage } = this.props
    return (
      <Router>
        <div>
          <h1>Movie Tracker</h1>
          <header>
            <Nav />
          </header>
          <UserForm />
          <MoviesContainer errorMessage={errorMessage} movies={movies} />
        </div>
      </Router>
    );
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  errorMessage: state.errorMessage,
  loading: state.loading
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      getMovies,
      handleError,
      isLoading
    },
  dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
