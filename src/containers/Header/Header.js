import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/MovieTracker_font_wave.png';
import Nav from '../Nav/Nav';

import PropTypes from 'prop-types';

export const Header = ({ getFavorites }) => {

  return(
    <header className="App-header">
      <Nav getFavorites={getFavorites}/>
      <Link className="App-img" to='/'>
      <img src={logo} alt="Logo" />
      </Link>
    </header>
  )
}


Nav.propTypes = {
  getFavorites: PropTypes.func.isRequired
}
