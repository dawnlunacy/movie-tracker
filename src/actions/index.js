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
})
