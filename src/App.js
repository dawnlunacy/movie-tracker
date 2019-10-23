import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesContainer from './containers/MoviesContainer/MoviesContainer';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Movie Tracker</h1>
      <MoviesContainer />
    </div>
    </Router>
  );
}

export default App;
