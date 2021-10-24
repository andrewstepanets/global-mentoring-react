import {
  ADD_MOVIE_UI,
  DELETE_MOVIE,
  EDIT_MOVIE,
  EDIT_MOVIE_UI,
  ERROR_MOVIES,
  FETCH_LOAD_MORE_MOVIES,
  FETCH_MOVIES,
  FILTER_MOVIES,
  LOADING_MOVIES,
  POSTER_ID,
  SORT_BY_MOVIES,
} from './types';

export const fetchMovies = (payload) => {
  return { type: FETCH_MOVIES, payload };
};

export const loadMoreMovies = (payload) => {
  return { type: FETCH_LOAD_MORE_MOVIES, payload };
};

export const isLoadingMovies = () => {
  return { type: LOADING_MOVIES };
};

export const errorMovies = () => {
  return { type: ERROR_MOVIES };
};

export const deleteMovie = (payload) => {
  return { type: DELETE_MOVIE, payload };
};

export const deleteMovieId = (payload) => {
  return { type: POSTER_ID, payload };
};

export const addMovieUI = (payload) => {
  return { type: ADD_MOVIE_UI, payload };
};

export const editMovie = (payload) => {
  return { type: EDIT_MOVIE, payload };
};

export const editMovieUI = (payload) => {
  return { type: EDIT_MOVIE_UI, payload };
};

export const filterMovies = (payload) => {
  return { type: FILTER_MOVIES, payload };
};

export const sortByMovies = (payload) => {
  return { type: SORT_BY_MOVIES, payload };
};
