import React from 'react';
import logo from '../../images/MovieTracker_font_wave.png'
import Nav from '../Nav/Nav';

export const Header = ({ getFavorites }) => {

  return(
    <header className="App-header">
      <Nav getFavorites= { getFavorites }/>
      <img src={logo} alt="Logo" className="App-img"/>
    </header>
  )
}