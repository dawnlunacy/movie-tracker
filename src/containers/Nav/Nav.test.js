import React from 'react';
import { Nav } from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {

  it('should match snapshot', () => {
    const getFavorites = jest.fn()
    const mockCurrentUser = {id:3, name: "Tyler", email:"awesome@gmail.com"}
    const wrapper = shallow(<Nav getFavorites={getFavorites} currentUser={mockCurrentUser}/>)

    expect(wrapper).toMatchSnapshot();
  });
});
