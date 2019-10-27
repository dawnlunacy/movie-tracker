import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of GET_MOVIES', () => {
    const movies = [
      {
        id: 475557,
        overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        poster: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        rating: 8.6,
        title: "Joker"
      },
      {
        id: 474350,
        overview: "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
        poster: "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
        rating: 6.9,
        title: "It Chapter Two"
      }
    ]
    const expectedAction = {
      type: 'GET_MOVIES',
      movies: [
        {
          id: 475557,
          overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
          poster: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          rating: 8.6,
          title: "Joker"
        },
        {
          id: 474350,
          overview: "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
          poster: "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
          rating: 6.9,
          title: "It Chapter Two"
        }
      ]
    }

    const result = actions.getMovies(movies);
    
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HANDLE_ERROR', () => {
    const errorMessage = 'Super duper error'

    const expectedAction = {
      type: 'HANDLE_ERROR',
      errorMessage: 'Super duper error'
    }

    const result = actions.handleError(errorMessage)

    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SAVE_USER', () => {
    const currentUser = {
      name: 'Jack Skelington',
      email: 'jack.skelington@halloweentown.com',
      id: 666
    }

    const expectedAction = {
      type: 'SAVE_USER',
      currentUser: {
        name: 'Jack Skelington',
        email: 'jack.skelington@halloweentown.com',
        id: 666
      }
    }

    const result = actions.saveUser(currentUser)

    expect(result).toEqual(expectedAction)
  });

});