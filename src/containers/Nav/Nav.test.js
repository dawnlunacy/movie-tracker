import React from 'react';
import { Nav, mapStateToProps, mapDispatchToProps } from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {

  let wrapper;
  let mockCurrentUser;
  beforeEach(() => {
    mockCurrentUser = {id:3, name: "Tyler", email:"awesome@gmail.com"}
    const getFavorites = jest.fn()
    wrapper = shallow(<Nav getFavorites={getFavorites} currentUser={mockCurrentUser}/>)
  });

  it('should match snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should return an object with the currentUser', () => {

    const mockState = { 
      currentUser: [{currentUser: mockCurrentUser}],
      filter: 'SAVE_USER'
    };
    const expected = {
      currentUser: [{currentUser: mockCurrentUser}]
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });

});
