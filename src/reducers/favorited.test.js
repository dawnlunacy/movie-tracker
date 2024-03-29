import { favorited } from '../reducers/favorited';

describe('favorited', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = favorited(undefined, {});

    expect(result).toEqual(expected);
  });

  it.skip('should retirieve favorited movies', () => {
    const initialState = [ {
      id: 475557,
      overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      poster: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      rating: 8.6,
      title: "Joker"
    },
    {
      id: 420809,
      overview: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
      poster: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
      rating: 7.1,
      title: "Maleficent: Mistress of Evil"
    }];

    const state = initialState;
    const action = {
      type: 'RETRIEVE_FAVORITED',
      favorited: null
    };

    const newState = initialState;
    const result = favorited(state, action)

    expect(result).toEqual(newState)
  });

  it('should return state with a new favorited movie added', () => {
    const initialState = [ {
      id: 475557,
      overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      poster: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      rating: 8.6,
      title: "Joker"
    },
    {
      id: 420809,
      overview: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
      poster: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
      rating: 7.1,
      title: "Maleficent: Mistress of Evil"
    } ];
    const movieToFavorite = {
      id: 540901,
      overview: "A crew of savvy former strip club employees band together to turn the tables on their Wall Street clients.",
      poster: "/zBhv8rsLOfpFW2M5b6wW78Uoojs.jpg",
      rating: 6.1,
      title: "Hustlers"}

    const state = initialState;
    const action = {
      type: 'SAVE_NEW_FAVORITE',
      favorited: movieToFavorite
    };

    const newState = [...initialState, movieToFavorite];

    const result = favorited(state, action);

    expect(result).toEqual(newState);
  });

  it.skip('should delete stored favorite', () => {
    const initialState = [ {
      id: 475557,
      overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      poster: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      rating: 8.6,
      title: "Joker"
    },
    {
      id: 420809,
      overview: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
      poster: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
      rating: 7.1,
      title: "Maleficent: Mistress of Evil"
    } ];

    const state = initialState;
    const action = {
      type: 'DELETE_STORED_FAVORITE',
      id: 420809
    }

    const newState = initialState[0];
    const result = favorited(state, action)

    expect(result).toEqual(newState)
  });

  it('should clear favorites in store when a user logs out', () => {
    const initialState = [ {
      id: 475557,
      overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      poster: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      rating: 8.6,
      title: "Joker"
    },
    {
      id: 420809,
      overview: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
      poster: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
      rating: 7.1,
      title: "Maleficent: Mistress of Evil"
    } ];
    const mockCurrentUser = {id: 787, name: "Bunny", email:"bunny@doggo.com"}
    const state = initialState;
    const action = {
      type: 'LOGOUT_USER',
      currentUser: mockCurrentUser
    }
  
    const newState = [];
    const result = favorited(state, action)
  
    expect(result).toEqual(newState)
  });
});