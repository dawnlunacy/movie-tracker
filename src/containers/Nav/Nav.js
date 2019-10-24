import React from 'react';
// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return(
        <nav className="nav">
            <p className="nav-p">FAVORITES</p>
            <div className="nav-user-options">
              <Link className="link" to='/login'> <p className="nav-p">LOGIN</p> </Link>
              <p className="nav-p">SIGN UP</p>
            </div>
        </nav>
    )
}

export default Nav;
