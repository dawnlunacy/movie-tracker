import React from 'react';
import { FavoritesContainer } from './FavoritesContainer';
import { shallow } from 'enzyme';

describe ( 'FavoritesContainer', () => {
  it('should match snapshot', () => {
    const favorites = [ {
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
      title: "Maleficent: Mistress of Evil"
    } ];
    const wrapper = shallow(<FavoritesContainer favorites={favorites}/>)
    expect(wrapper).toMatchSnapshot();
  });
});