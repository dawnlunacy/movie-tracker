import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesContainer from '../containers/MoviesContainer/MoviesContainer';
import Nav from '../containers/Nav/Nav';
import UserForm from '../containers/UserForm/UserForm';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <h1>Movie Tracker</h1>
        <header>
          <Nav />
        </header>
        <MoviesContainer />
        <UserForm />
      </div>
    </Router>
  );
}

export default App;
