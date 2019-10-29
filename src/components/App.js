import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MoviesContainer from '../containers/MoviesContainer/MoviesContainer';
import { Header } from '../containers/Header/Header';
import { Nav } from '../containers/Nav/Nav';
import LoginForm from '../containers/LoginForm/LoginForm';
import SignUpForm from '../containers/SignUpForm/SignUpForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies, handleError, isLoading, saveUser, saveNewFavorite, deleteStoredFavorite, retrieveFavorited } from '../actions';
import { fetchData, postFavorite, deleteFavorite } from '../utils/apiCalls';
import { filteredMovieData } from '../utils/helpers';
import './App.css';
import logo from '../images/MovieTracker_font_wave.png';
import FavoritesContainer from '../containers/FavoritesContainer/FavoritesContainer';

export class App extends Component {

  async componentDidMount() {
    const { getMovies, handleError, isLoading } = this.props

    try {
      isLoading(true)
      const movies = await fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56')
      const cleanMovies = filteredMovieData(movies.results)
      isLoading(false)
      getMovies(cleanMovies)
    } catch {
      isLoading(false)
      handleError('There was an error getting your movies!')
    }
  }

  getFavorites = async (id) => {
    const favoriteMovies = await fetchData(`http://localhost:3001/api/v1/users/${id}/moviefavorites`)
    console.log('in getFavorites--->>>', favoriteMovies)
    return favoriteMovies
}

  toggleFavorite = async (movieInfo, id) => {
    const { currentUser, saveNewFavorite, deleteStoredFavorite, favorited } = this.props;
    if (currentUser === null) {
      return
    } else {
      if (favorited.find(favoriteMovie => {
        return favoriteMovie.movie_id === movieInfo.movie_id
      })) {
        const deletedFavorite = await deleteFavorite(currentUser.id, movieInfo.movie_id)
        deleteStoredFavorite(movieInfo.movie_id)
        return deletedFavorite
      } else {
        const postedFavorite = await postFavorite(movieInfo, id)
        saveNewFavorite(movieInfo)
        return postedFavorite
      }
    }
  }

  toggleStar = movieId => {
    const { favorited } = this.props
    return favorited.find((favorite) => {
      return favorite.movie_id === movieId
    })
  }
  
  render() {
    return (
        <div className="App">
        <Route exact path='/login' render={ () => <LoginForm getFavorites={this.getFavorites}/>}/> 
        <Route exact path='/signup' render={ () => <SignUpForm />}/>
        <Route exact path='/' render={ () =>
          <>
            <Header getFavorites={this.getFavorites}/>
            <MoviesContainer toggleFavorite={this.toggleFavorite} toggleStar={this.toggleStar}/>
          </>
        } />
        <Route exact path='/favorites' render={ () =>
          <>
            <Header getFavorites={this.getFavorites}/>
            <FavoritesContainer toggleFavorite={this.toggleFavorite} toggleStar={this.toggleStar}/>
          </>
        } />
        </div>
    );
  }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  loading: state.loading,
  favorited: state.favorited
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      getMovies,
      handleError,
      isLoading,
      saveUser,
      saveNewFavorite,
      deleteStoredFavorite,
      retrieveFavorited
    },
  dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
