export const favorited = (state = null, action) => {
  switch (action.type) {
    case 'RETRIEVE_FAVORITED':
      return action.favorited
    case 'SAVE_NEW_FAVORITE':
      return [...state, action.favorited]
    default:
      return state
  }
}
