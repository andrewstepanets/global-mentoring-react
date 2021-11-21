import { initialState, movies } from '../redux/reducers';

import {
  FETCH_MOVIES,
  POSTER_ID,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  FILTER_ITEM,
  SEARCH_MOVIES,
  ERROR_MESSAGE,
} from '../redux/types';

const poster = {
  title: 'Fifty Shades Freed',
  tagline: "Don't miss the life",
  vote_average: 6,
  vote_count: 1195,
  release_date: '2016-02-11',
  poster_path:
    'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
  overview: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  budget: 55000000,
  revenue: 1023784195,
  runtime: 110,
  genres: ['Family', 'Comedy'],
  id: 337167,
};

const customArrayMovies = new Array(10).fill({ ...poster });

describe('Redux testing', () => {
  it('should return the initial state', () => {
    expect(movies(undefined, { type: '', payload: '' })).toEqual(initialState);
  });

  it('should handle FETCH_MOVIES', () => {
    expect(
      movies(initialState, {
        type: FETCH_MOVIES,
        payload: {
          data: customArrayMovies,
          limit: 10,
          offset: 0,
          totalAmount: 3000,
        },
      }),
    ).toEqual({
      items: customArrayMovies,
      currentPage: 1,
      totalPages: 2999,
      error: null,
      loading: false,
      posterId: null,
      filterItem: 'all',
    });
  });

  it('should handle POSTER_ID', () => {
    expect(
      movies(initialState, {
        type: POSTER_ID,
        payload: 337167,
      }),
    ).toEqual({
      items: [],
      currentPage: 1,
      totalPages: 0,
      error: null,
      loading: true,
      posterId: 337167,
      filterItem: 'all',
    });
  });

  it('should handle ADD_MOVIE', () => {
    expect(
      movies(initialState, {
        type: ADD_MOVIE,
        payload: {
          genres: ['Drama'],
          id: 1618929888733,
          overview: 'New Movie Description',
          poster_path:
            'https://image.tmdb.org/t/p/w500/coss7RgL0NH6g4fC2s5atvf3dFO.jpg',
          release_date: '2021-04-30',
          runtime: 100,
          title: 'New Movie',
        },
      }).items.length,
    ).toBe(1);
  });

  it('should handle EDIT_MOVIE', () => {
    const initialState = {
      items: [
        {
          budget: 55000000,
          genres: ['Drama', 'Romance'],
          id: 337167,
          overview:
            'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
          poster_path:
            'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
          release_date: '2018-02-07',
          revenue: 136906000,
          runtime: 106,
          tagline: "Don't miss the life",
          title: 'Fifty Shades Freed',
          vote_average: 6.1,
          vote_count: 1195,
        },
      ],
      currentPage: 1,
      totalPages: 0,
      error: null,
      loading: true,
      posterId: null,
      filterItem: 'all',
    };

    expect(
      movies(initialState, {
        type: EDIT_MOVIE,
        payload: {
          ...initialState,
          title: 'Fifty Shades Freed EDITED',
        },
      }).items.length,
    ).toBe(1);
  });

  it('should handle DELETE_MOVIE', () => {
    expect(
      movies(initialState, {
        type: DELETE_MOVIE,
        payload: '',
      }).items.length,
    ).toBe(0);
  });

  it('should handle FILTER_ITEM', () => {
    expect(
      movies(initialState, {
        type: FILTER_ITEM,
        payload: 'horror',
      }),
    ).toEqual({
      currentPage: 0,
      error: null,
      filterItem: 'horror',
      items: [],
      loading: true,
      posterId: null,
      totalPages: 0,
    });
  });

  it('should handle SEARCH_MOVIES', () => {
    const initialState = {
      budget: 0,
      genres: ['Action', 'Adventure', 'Family', 'Science Fiction'],
      id: 348350,
      overview:
        'Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.',
      poster_path:
        'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
      release_date: '2018-05-23',
      revenue: 0,
      runtime: null,
      tagline: '',
      title: 'Solo: A Star Wars Story',
      vote_average: 0,
      vote_count: 2,
    };

    expect(
      movies(undefined, {
        type: SEARCH_MOVIES,
        payload: initialState,
      }),
    )['title'];
  });

  it('should handle ERROR_MESSAGE', () => {
    expect(
      movies(initialState, {
        type: ERROR_MESSAGE,
        payload: 'Not Found',
      }),
    )['error'];
  });
});
