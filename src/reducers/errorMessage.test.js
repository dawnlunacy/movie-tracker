import { errorMessage } from '../reducers/errorMessage';

describe('errorMessage', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = errorMessage(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return an state with a new error', () => {
    const initialState = '';
    const state = initialState;
    const action = {
      type: "HANDLE_ERROR",
      errorMessage: "Username or Password is incorrect"
    }

    const result = errorMessage(state, action)

    expect(result).toEqual(action.errorMessage)
  });
});