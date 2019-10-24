import { combineReducers } from 'redux';
import { movies } from './movies';
import { errorMessage } from './errorMessage';
import { loading } from './loading';

export const rootReducer = combineReducers({
  movies,
  errorMessage,
  loading,
})
