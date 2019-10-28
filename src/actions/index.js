export const getMovies = movies => ({
  type: 'GET_MOVIES',
  movies
});

export const handleError = errorMessage => ({
  type: 'HANDLE_ERROR',
  errorMessage
});

export const isLoading = boolean => ({
  type: 'IS_LOADING',
  boolean
});

export const saveUser = currentUser => ({
  type: 'SAVE_USER',
  currentUser
});

export const logoutUser = currentUser => ({
  type: 'LOGOUT_USER',
  currentUser
});

export const saveNewFavorite = favorited => ({
  type: 'SAVE_NEW_FAVORITE',
  favorited
})

export const retrieveFavorited = favorited => ({
  type: 'RETRIEVE_FAVORITED',
  favorited
});
