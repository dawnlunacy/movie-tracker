export const currentUser = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_USER':
            return action.currentUser
        default: 
            return state
    }
}