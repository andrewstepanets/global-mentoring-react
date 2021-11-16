import {
  FETCH_MOVIES,
  DELETE_MOVIE,
  POSTER_ID,
  ADD_MOVIE,
  EDIT_MOVIE,
  FILTER_MOVIES,
  FILTER_ITEM,
  SEARCH_MOVIES,
  ERROR_MESSAGE,
} from './types';

export const fetchMovies = (payload) => {
  return { type: FETCH_MOVIES, payload };
};

export const deleteMovie = (payload) => {
  return { type: DELETE_MOVIE, payload };
};

export const putPosterId = (payload) => {
  return { type: POSTER_ID, payload };
};

export const addMovie = (payload) => {
  return { type: ADD_MOVIE, payload };
};

export const editMovie = (payload) => {
  return { type: EDIT_MOVIE, payload };
};

export const filterMovies = (payload) => {
  return { type: FILTER_MOVIES, payload };
};

export const filterItem = (payload) => {
  return { type: FILTER_ITEM, payload };
};

export const searchMovies = (payload) => {
  return { type: SEARCH_MOVIES, payload };
};

export const getErrorMessage = (payload) => {
  return { type: ERROR_MESSAGE, payload };
};
