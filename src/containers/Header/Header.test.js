import React from 'react';
import { Header } from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  it('should match snapshot', () => {
    const getFavorites = jest.fn()
    const wrapper = shallow(<Header getFavorites={getFavorites}/>);
    
    expect(wrapper).toMatchSnapshot();
  });
});