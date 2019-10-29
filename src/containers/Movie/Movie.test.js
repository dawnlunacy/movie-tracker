import React from 'react';
import { shallow } from 'enzyme';
import { Movie, mapStateToProps, favorited } from './Movie';

describe('Movie', () => {
    it('Movie should render the movie data in <section> tag correctly', () => {

      const mockToggleFavorite = jest.fn();
      const mockToggleStar = jest.fn();
      
// this snapshot does not pass, what do do with mockFavorites?
      const mockFavorites = [
        {
          id: 475557,
          overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
          poster: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          rating: 8.6,
          title: "Joker"
        },
        {
          id: 420809,
          overview: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
          poster: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
          rating: 7.1,
          title: "Maleficent: Mistress of Evil"}
      ]

      const wrapper = shallow(<Movie
        key = {420809}
        movie_id = {420809}
        title = {"Joker"}
        poster_path = {"/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg"}
        release_date = {2019-10-25}
        vote_average = {8.6}
        overview = {"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure."}
        toggleFavorite = {mockToggleFavorite}
        toggleStar = {mockToggleStar}
      />);

      expect(wrapper).toMatchSnapshot();
    });
});
