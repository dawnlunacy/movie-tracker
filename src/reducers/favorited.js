export const favorited = (state = null, action) => {
  switch (action.type) {
    case 'RETRIEVE_FAVORITED':
      return action.favorited
    default:
      return state
  }
}
