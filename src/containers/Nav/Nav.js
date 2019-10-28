import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/index';
import './Nav.css'

export const Nav = ({ currentUser, logoutUser, getFavorites }) => {
    return(
        <nav className="nav">
            {currentUser !== null && <Link className="link" to='/favorites'> <p className="nav-p" onClick={() => console.log('pooop-->',getFavorites())}>FAVORITES</p> </Link>}
            {currentUser === null && <p className="nav-p">LOGIN TO VIEW FAVORITES</p> }
            <div className="nav-user-options">
            {currentUser !== null && <p className="nav-p">Hello, {currentUser.name}</p>}
            {currentUser !== null && <Link className="link" to='/'> <p className="nav-p" onClick={() => logoutUser(currentUser)}>LOGOUT</p> </Link>}
            {currentUser === null && <Link className="link" to='/login'> <p className="nav-p">LOGIN</p> </Link>}
            {currentUser === null && <Link className="link" to='/signup'> <p className="nav-p">SIGN UP</p> </Link>}
            </div>
        </nav>
    )
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  logoutUser: currentUser => dispatch(logoutUser(currentUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
