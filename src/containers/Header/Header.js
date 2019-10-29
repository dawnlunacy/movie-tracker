import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../images/MovieTracker_font_wave.png'
import Nav from '../Nav/Nav';
import browserHistory from 'react-router-dom/withRouter';

export const Header = ({ getFavorites }) => {

  return(
    <header className="App-header">
      <Nav getFavorites={getFavorites}/>
      {/* <Link className="App-img" to='/'> */}
      <img src={logo} alt="Logo" onClick={browserHistory.goBack}/>
      {/* </Link> */}
    </header>
  )
}