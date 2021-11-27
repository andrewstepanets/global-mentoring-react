import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getErrorMessage } from 'redux/movies/movies.actions';

export const useApiRequest = (method, endpoint, action) => {
  const dispatch = useDispatch();

  const fetchData = useCallback(
    (params = '', body = {}) => {
      axios[method](`${endpoint}${params}`, body)
        .then(({ data }) => {
          dispatch(action(data));
        })
        .catch((error) => {
          dispatch(getErrorMessage(error.response.data));
        });
    },
    [method, endpoint, action],
  );

  return { fetchData };
};
