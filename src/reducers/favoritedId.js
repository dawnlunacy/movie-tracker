export const favoritedId = (state=[], action) => {
  switch (action.type) {
    case 'SAVE_FAVORITED_ID':
      return action.favoritedId
    default:
      return state
  }
}