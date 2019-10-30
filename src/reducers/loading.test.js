import { loading } from '../reducers/loading';

describe('loading', () => {
  it('should return the initial state', () => {
    const expected = false;

    const result = loading(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should update the state of loading', () => {
    const initialState = false;
    const state = initialState;
    const action = {
      type: "IS_LOADING",
      boolean: true
    }

    const newState = action.boolean

    const result = loading(state, action);

    expect(result).toEqual(newState);
  });
});