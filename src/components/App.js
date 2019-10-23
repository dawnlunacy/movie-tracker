import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesContainer from '../containers/MoviesContainer/MoviesContainer';
import Nav from '../containers/Nav/Nav';
// import UserForm from '../containers/UserForm/UserForm';
import { fetchData } from '../utils/apiCall';
import { filteredMovieData } from '../utils/helpers';
import './App.css';


class App extends Component {

  componentDidMount = async () =>  {
    const movies = await fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56')
    const cleanMovies = filteredMovieData(movies.results)
    console.log(cleanMovies)
  }
  render() {
    return (
      <Router>
        <div>
          <h1>Movie Tracker</h1>
          <header>
            <Nav />
          </header>
          <MoviesContainer />
          {/* <UserForm /> */}
        </div>
      </Router>
    );
  }
  }

export default App;
