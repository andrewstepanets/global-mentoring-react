import axios from 'axios';
import { useCallback, useState } from 'react';
import { API_BASE } from '../@constants/index';

const useMoreDetailsMovie = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loadingMovieDetails, setLoadingMovieDetails] = useState(true);
  const [errorMovieDetails, setErrorMovieDetails] = useState(false);

  const fetchMovieDetails = useCallback(
    async (id) => {
      setErrorMovieDetails(false);
      setLoadingMovieDetails(true);

      try {
        const response = await axios.get(`${API_BASE}/${id}`);
        const responseMovieDetails = response.data;

        setMovieDetails(responseMovieDetails);
      } catch (error) {
        setErrorMovieDetails(true);
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
