import axios from 'axios';
import { API_BASE, API_PAGE } from '../@constants/index';
import {
  addMovieUI,
  deleteMovie,
  editMovieUI,
  errorMovies,
  fetchMovies,
  filterMovies,
  isLoadingMovies,
  loadMoreMovies,
} from '../redux/actions';

export const getMovies = () => (dispatch) => {
  dispatch(isLoadingMovies());

  axios
    .get(API_BASE)
    .then(({ data }) => {
      dispatch(fetchMovies(data));
    })
    .catch((error) => {
      dispatch(errorMovies());
    });
};

export const getMoreMovies = (currentPage) => (dispatch) => {
  dispatch(isLoadingMovies());

  axios
    .get(`${API_PAGE}${currentPage + 1}`)
    .then(({ data }) => {
      dispatch(loadMoreMovies(data));
    })
    .catch((error) => {
      dispatch(errorMovies());
    });
};

export const deleteMovieFetch = (id) => (dispatch) => {
  axios
    .delete(`${API_BASE}/${id}`)
    .then(({ data }) => {
      dispatch(deleteMovie({ data, id }));
    })
    .catch((error) => {
      dispatch(errorMovies());
    });
};

export const addMovie = (values) => (dispatch) => {
  const body = { ...values, runtime: parseInt(values.runtime) };

  axios
    .post(API_BASE, body)
    .then(dispatch(addMovieUI(body)))
    .catch((error) => {
      dispatch(errorMovies());
    });
};

export const editMovie = (values) => (dispatch) => {
  const body = {
    ...values,
    runtime: parseInt(values.runtime),
    id: parseInt(values.id),
  };

  axios
    .put(API_BASE, body)
    .then(dispatch(editMovieUI(body)))
    .catch((error) => {
      dispatch(errorMovies());
    });
};

export const getFilterMovies = (genre) => (dispatch) => {
  axios
    .get(`${API_BASE}?filter=${genre}`)
    .then(({ data }) => {
      dispatch(filterMovies(data));
    })
    .catch((error) => {
      dispatch(errorMovies());
    });
};

export const getSortByMovies = (sortItem) => (dispatch) => {
  axios
    .get(`${API_BASE}?sortBy=${sortItem}`)
    .then(({ data }) => {
      dispatch(filterMovies(data));
    })
    .catch((error) => {
      dispatch(errorMovies());
    });
};
