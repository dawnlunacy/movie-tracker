import { currentUser } from '../reducers/currentUser';

describe('currentUser', () => {
  it('should return the initial state', () => {
    //Setup
    const expected = null;

    //Execution
    const result = currentUser(undefined, {});

    //Expecation
    expect(result).toEqual(expected);
  });
});