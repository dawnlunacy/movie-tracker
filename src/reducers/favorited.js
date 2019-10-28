export const favorited = (state = [], action) => {
  switch (action.type) {
    case 'RETRIEVE_FAVORITED':
      return [...state, action.favorited]
    default:
      return state
  }
}
