import { IMovieDetails } from 'components/movies-list/posters/types';
import { List } from 'immutable';
import {
  FETCH_MOVIES,
  POSTER_ID,
  DELETE_MOVIE,
  ADD_MOVIE,
  EDIT_MOVIE,
  FILTER_MOVIES,
  FILTER_ITEM,
  SEARCH_MOVIES,
  ERROR_MESSAGE,
} from './movies.types';

export interface MoviesState {
  items: Immutable.List<IMovieDetails>;
  currentPage: number;
  totalPages: number;
  error: string | null;
  loading: boolean;
  posterId: number | null;
  filterItem: string;
}

export const initialState: MoviesState = {
  items: List(),
  currentPage: 1,
  totalPages: 0,
  error: null,
  loading: true,
  posterId: null,
  filterItem: 'all',
};

const movies = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        items:
          state.currentPage === 1
            ? List(payload.data)
            : List(state.items).concat(List(payload.data)),
        currentPage: state.currentPage + 1,
        totalPages: payload.totalAmount - state.currentPage,
        loading: false,
      };

    case POSTER_ID:
      return {
        ...state,
        posterId: payload,
      };

    case ADD_MOVIE:
      return {
        ...state,
        items: List(state.items).unshift({ id: state.posterId, ...payload }),
        loading: false,
      };

    case EDIT_MOVIE:
      const updatedMovie = state.items.find((movie) => {
        return movie.id === payload.id;
      });

      if (updatedMovie) {
        Object.assign(updatedMovie, payload);
      }

      return {
        items: List(state.items),
      };

    case DELETE_MOVIE:
      return {
        ...state,
        items: List(state.items).filter((item) => item.id !== state.posterId),
        loading: false,
      };

    case FILTER_MOVIES:
      return {
        ...state,
        items: List(state.items).concat(List(payload.data)),
        currentPage: payload.offset + 1,
        totalPages: payload.totalAmount - state.currentPage,
        loading: false,
      };

    case FILTER_ITEM:
      return {
        ...state,
        currentPage: 0,
        filterItem: payload,
        items: List(),
        loading: true,
      };

    case SEARCH_MOVIES:
      return {
        ...state,
        items: List(payload.data),
        currentPage: 1,
        totalPages: payload.totalAmount - state.currentPage,
      };

    case ERROR_MESSAGE:
      return {
        ...state,
        items: List(),
        currentPage: 1,
        totalPages: payload.totalAmount - state.currentPage,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default movies;
