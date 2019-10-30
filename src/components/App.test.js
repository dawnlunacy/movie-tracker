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

  const mockCurrentUser = {
    id: 3, 
    email:'rudd.lacy@gmail.com', 
    name: 'lacy'
  };

  fetchData.mockImplementation(() => Promise.resolve(mockCurrentUser))

  beforeEach(() => {
    wrapper = shallow(<App 
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
    expect(wrapper).toMatchSnapshot()
  });
  
  
  describe('getFavorites', () => {
    let mockResponse = {
        "results": [
          {
            "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            "id": 475557,
            "original_title": "Joker",
              "title": "Joker",
              "vote_average": 8.6,
              "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
              "release_date": "2019-10-04"
            },
          ]};
          
          beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
              return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
              });
            });
      });
      
      it ('should return array of favorited movies for currentUser', async () => {
        const mockUrl = `http://localhost:3001/api/v1/users/${mockCurrentUser.id}/moviefavorites`;
        
        await wrapper.instance().getFavorites(mockCurrentUser.id);
        
        fetchData(mockUrl)
        .then(results => expect(results).toEqual(mockResponse.results))
        .catch(error => error)
      });
    });

    describe('mapStateToProps', () => {
      
      let mockCurrentUser;
      beforeEach(() => {
        mockCurrentUser = {
          id: 3, 
          email:'rudd.lacy@gmail.com', 
          name: 'lacy'
        };

      })
      it('should return an object with the currentUser, isLoading, and favorited', () => {
        const mockState = { 
          currentUser: {currentUser: mockCurrentUser},
          loading: false,
          favorited: [           
            {
              "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
              "id": 475557,
              "original_title": "Joker",
              "title": "Joker",
              "vote_average": 8.6,
              "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
              "release_date": "2019-10-04"
            }]
        };
        const expected = {
          currentUser: {currentUser: mockCurrentUser},
          loading: false,
          favorited: mockState.favorited
        };
    
        const mappedProps = mapStateToProps(mockState);
    
        expect(mappedProps).toEqual(expected);
      });

    });

    describe.skip('mapDispatchToProps', () => {
      it('calls dispatch with a getUser action is called', () => {
        const mockDispatch = jest.fn();
        const movies =           
        {
          "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          "id": 475557,
          "original_title": "Joker",
          "title": "Joker",
          "vote_average": 8.6,
          "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
          "release_date": "2019-10-04"
          }
  
        const actionToDispatch = wrapper.instance().getMovies(movies);
  
        const mappedProps = mapDispatchToProps(mockDispatch);
        mappedProps.wrapper.instance().getMovies(movies);
  
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });

    });
    
  }); 
