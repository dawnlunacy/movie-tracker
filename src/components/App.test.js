import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchData } from '../utils/apiCalls';

jest.mock('../utils/apiCalls')

describe('App', () => {
  let wrapper;

  const mockGetMovies = jest.fn();
  const mockhandleError = jest.fn();
  const mockIsLoading = jest.fn();
  const mockSaveUser = jest.fn();
  const mockCleanMovies = jest.fn();

  const mockCurrentUser = {id: 3, email:'rudd.lacy@gmail.com', name: 'lacy'};
  // const mockLoading = false;
    //can use this or can just set to false

  fetchData.mockImplementation(() => Promise.resolve(mockCurrentUser))

  beforeEach(() => {
    wrapper = shallow(<App 
      //see what is defined inside of mapState and mapDispatch
      currentUser={ mockCurrentUser }
      loading = {false}
      getMovies = {mockGetMovies}
      handleError = {mockhandleError}
      isLoading = {mockIsLoading}
      saveUser = {mockSaveUser}
      cleanMovies = {mockCleanMovies}
      />);
  });

  it('should match snapshot', () => {
    // const wrapper = shallow (<App />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should update loading, fetch movies, and getMovies after mounting', () => {
    expect(mockIsLoading).toHaveBeenCalledWith(true)
  })

}); 














///****** THIS CODE BELOW WAS CUT OUT OF APICALLS.TEST.JS  -----> NOT SURE WHY IT WAS THERE BUT I LEFT IT FOR NOW */
// describe('App', () => {
//   const mockResponse = [
//     {
//       id: 4444,
//       overview: 'puppies puppies puppies',
//       poster: 'poster path goes here',
//       rating: 9.9,
//       title: 'Best in show' 
//     }
//   ]

//   beforeEach(() => {
//     window.fetch = jest.fn().mockImplementation(() => {
//       return Promise.resolve({
//         ok: true,
//         json: () => Promise.resolve(mockResponse)
//       });
//     });

//   it('should call fetch with the correct url', () => {
//     fetchData(mockResponse);
//     expect(window.fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56')
//   })
// })
// })