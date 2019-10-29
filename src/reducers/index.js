import { combineReducers } from 'redux';
import { movies } from './movies';
import { errorMessage } from './errorMessage';
import { loading } from './loading';
import { currentUser } from './currentUser';
import { favorited } from './favorited';
import { selectedMovie } from './selectedMovie';

export const rootReducer = combineReducers({
  movies,
  errorMessage,
  loading,
  currentUser,
  favorited,
  selectedMovie
});