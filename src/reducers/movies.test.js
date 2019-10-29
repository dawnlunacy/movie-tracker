import { movies } from '../reducers/movies';

describe('movies', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = movies(undefined, {});

    expect(result).toEqual(expected);
  });
});