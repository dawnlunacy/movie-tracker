import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { fetchData } from './utils/apiCall';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  componentDidMount = async () =>  {
    const movies = await fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56')
    console.log(movies.results)
  }

render() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Router>
  );
}
}

export default App;
