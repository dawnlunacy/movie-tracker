export const favorited = (state = [], action) => {
  switch (action.type) {
    case 'RETRIEVE_FAVORITED':
      return action.favorited
    case 'SAVE_NEW_FAVORITE':
      return [...state, action.favorited]
    case 'DELETE_STORED_FAVORITE':
      state = state.filter(movie => movie.movie_id !== action.id)
      return state
    default:
      return state
  }
}
