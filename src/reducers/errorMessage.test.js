import { errorMessage } from '../reducers/errorMessage';

describe('errorMessage', () => {
  it('should return the initial state', () => {
    const expected = '';

    const result = errorMessage(undefined, {});

    expect(result).toEqual(expected);
  });
});