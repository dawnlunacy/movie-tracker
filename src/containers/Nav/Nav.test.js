import React from 'react';
import { Nav, mapStateToProps, mapDispatchToProps } from './Nav';
import { logoutUser, saveUser } from '../../actions';
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

  it('calls dispatch with a logoutUser action when called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = logoutUser(mockCurrentUser);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.logoutUser(mockCurrentUser);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it.skip('should call the getFavorites prop when FAVORITES is clicked', () => {
    // Setup
    const saveUser = jest.fn()
    const mockGetFavorites = jest.fn();
    const mockNewCurrentUser = {
      id: 7, 
      name: "Zombie", 
      email:"kitty@gmail.com"
    }

    saveUser(mockNewCurrentUser)
    //?????

    // Execution
    wrapper.find('.nav-p').at(0).simulate('click');

  
    // Expectation
    expect(mockGetFavorites).toHaveBeenCalledWith(mockNewCurrentUser.id);
  });


});
