import { combineReducers } from 'redux';
import {
  ADD_MOVIE_UI,
  DELETE_MOVIE,
  EDIT_MOVIE_UI,
  ERROR_MOVIES,
  FETCH_LOAD_MORE_MOVIES,
  FETCH_MOVIES,
  FILTER_MOVIES,
  LOADING_MOVIES,
  POSTER_ID,
  SORT_BY_MOVIES,
} from './types';

export const initialState = {
  items: [],
  currentPage: 0,
  totalPages: 0,
  error: null,
  loading: false,
  posterId: null,
};

const movies = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        items: payload.data,
        currentPage: payload.offset,
        totalPages: payload.totalAmount / payload.limit - payload.offset,
        error: null,
        loading: false,
      };

    case FETCH_LOAD_MORE_MOVIES:
      return {
        ...state,
        items: [...state.items, ...payload.data],
        currentPage: payload.offset,
        totalPages: payload.totalAmount / payload.limit - payload.offset,
        error: null,
        loading: false,
      };

    case POSTER_ID:
      return {
        ...state,
        posterId: payload,
      };

    case ADD_MOVIE_UI:
      return {
        ...state,
        items: [payload, ...state.items],
      };

    case EDIT_MOVIE_UI:
      let updatedMovie = state.items.find((movie) => {
        return movie.id === payload.id;
      });

      Object.assign(updatedMovie, payload);

      return {
        items: [...state.items],
      };

    case DELETE_MOVIE:
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.id !== payload.id),
          ...payload.data,
        ],
      };

    case FILTER_MOVIES:
      return {
        ...state,
        items: payload.data,
      };

    case SORT_BY_MOVIES:
      return {
        ...state,
        items: payload.data,
      };

    case ERROR_MOVIES:
      return {
        ...state,
        error: true,
      };

    case LOADING_MOVIES:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default combineReducers({
  movies,
});
