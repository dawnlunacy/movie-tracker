export const currentUser = (state = null, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return action.currentUser
    case 'LOGOUT_USER':
      state = null
      return state
    default:
      return state
  }
}
