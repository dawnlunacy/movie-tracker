import React from 'react';
import { connect } from 'react-redux';
import './Nav.css'

const Nav = () => {
    return(
        <nav className="nav">
            <p className="nav-p">Favorites</p>
            <p className="nav-p">Login</p>
            <p className="nav-p">Sign Up</p>
        </nav>
    )
}

export default Nav;
