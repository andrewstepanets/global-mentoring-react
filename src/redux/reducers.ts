import { combineReducers } from 'redux';
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
} from './types';

export const initialState = {
  items: [],
  currentPage: 1,
  totalPages: 0,
  error: null,
  loading: true,
  posterId: null,
  filterItem: 'all',
};

export const movies = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        items:
          state.currentPage === 1
            ? payload.data
            : [...state.items, ...payload.data],
        currentPage: payload.offset + 1,
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
        items: [{ id: state.posterId, ...payload }, ...state.items],
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
        items: [...state.items],
      };

    case DELETE_MOVIE:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== state.posterId)],
        loading: false,
      };

    case FILTER_MOVIES:
      return {
        ...state,
        items: [...state.items, ...payload.data],
        currentPage: payload.offset + 1,
        totalPages: payload.totalAmount - state.currentPage,
        loading: false,
      };

    case FILTER_ITEM:
      return {
        ...state,
        currentPage: 0,
        filterItem: payload,
        items: [],
        loading: true,
      };

    case SEARCH_MOVIES:
      console.log('payload: ', payload);

      return {
        ...state,
        items: payload.data,
        currentPage: 1,
        totalPages: payload.totalAmount - state.currentPage,
      };

    case ERROR_MESSAGE:
      return {
        ...state,
        items: [],
        currentPage: 1,
        totalPages: payload.totalAmount - state.currentPage,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default combineReducers({
  movies,
});
