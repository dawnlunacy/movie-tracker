import { currentUser } from '../reducers/currentUser';

describe('currentUser', () => {
  it('should return the initial state', () => {
    const expected = null;

    const result = currentUser(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with a new currentUser', () => {
    const mockCurrentUser = {id:9999, name: "Pumpkin", email:"Kitty@lovesHairTies.com"}
    const initialState = null;
    const state = initialState;
    const action = {
      type: "SAVE_USER",
      currentUser: mockCurrentUser
    }

    const newState = mockCurrentUser;

    const result = currentUser(state, action);

    expect(result).toEqual(newState);
  });
});
