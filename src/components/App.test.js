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
  const mockLoading = false;

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
        .catch(error => console.log(error))
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

    describe('mapDispatchToProps', () => {
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
        mappedProps.wrapper,instance().getMovies(movies);
  
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });

    });
    
  }); 
  
  
  
  
  
  
  
  
  // describe('componentDidMount', () => {
  //   it('should update loading, fetch movies, and getMovies after mounting', () => {

  //     expect(mockIsLoading).toHaveBeenCalledWith(true)
  //     expect(wrapper.instance().getMovies).toHaveBeenCalledWith(mockCleanMovies)
  //   });

  // });


  // wrapper.instance().getMovies.mockImplementation(() => {
  //   return Promise.resolve([
  //       {
  //           "popularity": 513.78,
  //           "vote_count": 4120,
  //           "video": false,
  //           "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  //           "id": 475557,
  //           "adult": false,
  //           "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
  //           "original_language": "en",
  //           "original_title": "Joker",
  //           "genre_ids": [
  //               80,
  //               18,
  //               53
  //           ],
  //           "title": "Joker",
  //           "vote_average": 8.6,
  //           "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
  //           "release_date": "2019-10-04"
  //       },
  //       {
  //           "popularity": 257.685,
  //           "vote_count": 394,
  //           "video": false,
  //           "poster_path": "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
  //           "id": 420809,
  //           "adult": false,
  //           "backdrop_path": "/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
  //           "original_language": "en",
  //           "original_title": "Maleficent: Mistress of Evil",
  //           "genre_ids": [
  //               12,
  //               14,
  //               10751
  //           ],
  //           "title": "Maleficent: Mistress of Evil",
  //           "vote_average": 7.2,
  //           "overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
  //           "release_date": "2019-10-18"
  //       }
  //   ])
  // })



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