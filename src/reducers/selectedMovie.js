export const selectedMovie = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_MOVIE':
      return action.movieInfo
    default:
      return state
  }
}