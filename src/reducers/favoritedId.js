export const favoritedId = (state=[], action) => {
  switch (action.type) {
    case 'SAVE_FAVORITED_ID':
      return [...state, action.favoritedId]
    default:
      return state
  }
}
