import axios from 'axios';
import { ModalsContext } from 'modal-context/modal-context';
import { useCallback, useContext } from 'react';
import { API_BASE } from '../@constants/index';

const useMoreDetailsMovie = () => {
  const {
    setErrorMovieDetails,
    setLoadingMovieDetails,
    setMovieDetails,
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
  } = useContext(ModalsContext);

  const fetchMovieDetails = useCallback(
    async (id) => {
      if (!id) {
        setErrorMovieDetails(true);
        setLoadingMovieDetails(false);
      }

      try {
        setLoadingMovieDetails(true);
        const response = await axios.get(`${API_BASE}/${id}`);
        const responseMovieDetails = response.data;
        console.log(responseMovieDetails);

        setMovieDetails(responseMovieDetails);
      } catch (error) {
        setErrorMovieDetails(true);
        console.log(error);
      } finally {
        setLoadingMovieDetails(false);
      }
    },
    [movieDetails],
  );

  return {
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
    fetchMovieDetails,
  };
};

export default useMoreDetailsMovie;
