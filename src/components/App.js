import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesContainer from '../containers/MoviesContainer/MoviesContainer'
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <h1>Movie Tracker</h1>
        <MoviesContainer />
      </div>
    </Router>
  );
}

export default App;
