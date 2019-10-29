import React from 'react';
import { shallow } from 'enzyme';
import { SelectedMovie, mapStateToProps } from './SelectedMovie';

describe('SelectedMovie', () => {

  it('should match snapshot', () => {
    const mockSelectedMovie =           
      {
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        vote_average: 8.6,
        release_date: 19-20-10,
      }
    const wrapper = shallow(
      <SelectedMovie selectedMovie={mockSelectedMovie}/>
    )

    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should return an object with the selectedMovie', () => {
      const mockSelectedMovie =           
      {
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        title: "Joker",
        overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        vote_average: 8.6,
        release_date: 19-20-10,
      }

      const mockState = {
        selectedMovie: [{selectedMovie: mockSelectedMovie}],
        filter: 'SELECT_MOVIE'
      };
      const expected = {
        selectedMovie: [{selectedMovie: mockSelectedMovie}]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
})