export const favorited = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_FAVORITED':
      return [...state, action.favorited]
    default:
      return state
  }
}
