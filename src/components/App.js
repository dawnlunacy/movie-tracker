import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesContainer from '../containers/MoviesContainer/MoviesContainer';
import Nav from '../containers/Nav/Nav';
import UserForm from '../containers/UserForm/UserForm';
import { fetchData } from '../utils/apiCall';
import { filteredMovieData } from '../utils/helpers';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount = async () =>  {
    const movies = await fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56')
    const cleanMovies = filteredMovieData(movies.results)
    this.setState({ movies: cleanMovies })
  }
  render() {
    console.log('in render---->', this.state.movies)
    return (
      <Router>
        <div>
          <h1>Movie Tracker</h1>
          <header>
            <Nav />
          </header>
          <MoviesContainer movies={this.state.movies}/>
          <UserForm />
        </div>
      </Router>
    );
  }
  }

export default App;
