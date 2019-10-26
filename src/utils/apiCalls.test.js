import React from 'react';
import { shallow } from 'enzyme';

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