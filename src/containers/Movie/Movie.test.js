import React from 'react';
import { shallow } from 'enzyme';
import { Movie } from './Movie';

describe('Movie', () => {
    it('should render the movie data in <section> tag correctly', () => {
        const wrapper = shallow(<Movie 
            key = {420809}
            id = {420809}
            title = {"Joker"}
            poster = {"/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg"}
            rating = {8.6}
            overview = {"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure."}
        />);

        expect(wrapper).toMatchSnapshot();
    });
});
