import { combineReducers } from 'redux';
import { movies } from './movies';
import { errorMessage } from './errorMessage';

export const rootReducer = combineReducers({
  movies,
  errorMessage,
})