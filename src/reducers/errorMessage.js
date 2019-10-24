export const errorMessage = (state='', action) => {
  switch(action.type) {
    case 'HANDLE_ERROR':
      return action.errorMessage
    default:
      return state
  }
}