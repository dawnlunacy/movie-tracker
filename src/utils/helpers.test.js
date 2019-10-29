import helpers from './helpers';
import { filteredMovieData } from './helpers'
describe('helpers', () => {

  it('should return an array of filtered movie data', () => {
    const mockMovies = [ {
        adult: false,
        backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        genre_ids: [80, 18, 53],
        id: 475557,
        original_language: "en",
        original_title: "Joker",
        overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        popularity: 458.719,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        release_date: "2019-10-04",
        title: "Joker",
        video: false,
        vote_average: 8.6,
        vote_count: 4305
      },
      {
        adult: false,
        backdrop_path: "/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
        genre_ids: [12, 14, 10751],
        id: 420809,
        original_language: "en",
        original_title: "Maleficent: Mistress of Evil",
        overview: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
        popularity: 231.895,
        poster_path: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
        release_date: "2019-10-18",
        title: "Maleficent: Mistress of Evil",
        video: false,
        vote_average: 7.1,
        vote_count: 472
      } ];

    const expectedAction = [ {
        movie_id: 475557,
        overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        release_date: "2019-10-04",
        vote_average: 8.6,
        title: "Joker"
      },
      {
        movie_id: 420809,
        overview: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
        poster_path: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
        release_date: "2019-10-18",
        vote_average: 7.1,
        title: "Maleficent: Mistress of Evil"
      } ];

    const result = filteredMovieData(mockMovies)

    expect(result).toEqual(expectedAction)
  })

})
