export const favorited = (state = [], action) => {
  switch (action.type) {
    case 'RETRIEVE_FAVORITED':
      return action.favorited
    case 'SAVE_NEW_FAVORITE':
      return [...state, action.favorited]
    case 'DELETE_STORED_FAVORITE':
      console.log('in fav reducer--->', action.favorited)
      state = state.filter(movie => movie !== action.favorited)
      return state
    default:
      return state
  }
}
