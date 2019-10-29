import React from 'react';
import { Nav } from './Nav';
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

  // describe('mapStateToProps', () => {
  //   it('should return an object with the currentUser', () => {


  //     const mockState = {
  //       selectedMovie: [{selectedMovie: mockSelectedMovie}],
  //       filter: 'SELECT_MOVIE'
  //     };
  //     const expected = {
  //       selectedMovie: [{selectedMovie: mockSelectedMovie}]
  //     };

  //     const mappedProps = mapStateToProps(mockState);

  //     expect(mappedProps).toEqual(expected);
  //   });
  // });

});
