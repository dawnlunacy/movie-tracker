import { fetchData, getUser, postFavorite } from './apiCalls';

describe('apiCalls', () => {
  describe('fetchData', () => {
    let mockResponse = {
      "results": [
          {
              "popularity": 513.78,
              "vote_count": 4120,
              "video": false,
              "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
              "id": 475557,
              "adult": false,
              "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
              "original_language": "en",
              "original_title": "Joker",
              "genre_ids": [
                  80,
                  18,
                  53
              ],
              "title": "Joker",
              "vote_average": 8.6,
              "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
              "release_date": "2019-10-04"
          },
          {
              "popularity": 257.685,
              "vote_count": 394,
              "video": false,
              "poster_path": "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
              "id": 420809,
              "adult": false,
              "backdrop_path": "/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
              "original_language": "en",
              "original_title": "Maleficent: Mistress of Evil",
              "genre_ids": [
                  12,
                  14,
                  10751
              ],
              "title": "Maleficent: Mistress of Evil",
              "vote_average": 7.2,
              "overview": "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
              "release_date": "2019-10-18"
          }
      ]};
  
      beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
      });
  
      it('should fetch with the correct url', () => {
        const mockUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56'
        fetchData(mockUrl);
  
        expect(window.fetch).toHaveBeenCalledWith(mockUrl);
      });
  
      it('should return an array of movies (HAPPY)', () => {
        const mockUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56';

        fetchData(mockUrl)
        .then(results => expect(results).toEqual(mockResponse));
      });
  
      it('should return an error (SAD)', () => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: false,
            statusText: "Invalid API key: You must be granted a valid key."
          })
        });

        const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56YOLO';

        expect(fetchData(url)).rejects.toEqual(Error("Invalid API key: You must be granted a valid key."));
      });
  });
  
  describe('getUser', () => {
    let mockResponse = {
      "id": 3,
      "name": "Lucy",
      "email": "lawless@gmail.com"
    };
  
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it('should fetch with the correct arguments', () => {
      const mockUrl = 'http://localhost:3001/api/v1/login'
      const mockUserInput = {
        email: 'rudd.lacy@gmail.com',
        password: 'password',
      }
      const expected = [ mockUrl, {
        method: 'POST',
        body: JSON.stringify(mockUserInput),
        headers: {
          'Content-Type': 'application/json'
        }
      }]
  
      getUser(mockUserInput, mockUrl);
  
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
  });
  
  describe('postFavorite', () => {
    let mockResponse = {
      "id": 1,
      "movie_id": 475557,
      "user_id": 3,
      "title": "Joker",
      "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "release_date": "2019-10-04",
      "vote_average": "8.6",
      "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure."
  };
  
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should fetch with the correct arguments', () => {
      const id = 3;
      const mockUrl = `http://localhost:3001/api/v1/users/${id}/moviefavorites`;
      const mockMovieInfo = {
        "movie_id": 475557,
        "title": "Joker",
        "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        "release_date": "2019-10-04",
        "vote_average": "8.6",
        "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure."
        };
        const expected = [ mockUrl, {
          method: 'POST',
          body: JSON.stringify(mockMovieInfo),
          headers: {
            'Content-Type': 'application/json'
          }
        }];

        postFavorite(mockMovieInfo, id);

        expect(window.fetch).toHaveBeenCalledWith(...expected);
    });
  });
});








































