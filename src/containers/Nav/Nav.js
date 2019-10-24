import React from 'react';
import { connect } from 'react-redux';
import './Nav.css'

const Nav = () => {
    return(
        <nav className="nav">
            <p className="nav-p">FAVORITES</p>
            <div className="nav-user-options">
              <p className="nav-p">LOGIN</p>
              <p className="nav-p">SIGN UP</p>
            </div>
        </nav>
    )
}

export default Nav;
