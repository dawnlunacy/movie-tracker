import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesContainer from '../containers/MoviesContainer/MoviesContainer';
import Nav from '../containers/Nav/Nav';
import UserForm from '../containers/UserForm/UserForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../actions';
import { fetchData } from '../utils/apiCall';
import { filteredMovieData } from '../utils/helpers';
import './App.css';


class App extends Component {

  componentDidMount = async () =>  {
    const { getMovies } = this.props
    console.log('in cpm--->', this.props)
    const movies = await fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56')
    const cleanMovies = filteredMovieData(movies.results)
    getMovies(cleanMovies)
  }

  render() {
    const { movies } = this.props
    return (
      <Router>
        <div>
          <h1>Movie Tracker</h1>
          <header>
            <Nav />
          </header>
          <MoviesContainer movies={movies}/>
          <UserForm />
        </div>
      </Router>
    );
  }
}

export const mapStateToProps = state => ({
  movies: state.movies
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      getMovies
    },
  dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
