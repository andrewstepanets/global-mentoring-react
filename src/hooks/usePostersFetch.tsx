import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE } from '../@constants/index';

const usePostersFetch = () => {
  const [movies, setMovies] = useState({ movies: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      const response = await axios.get(endpoint);
      const posters = response.data;

      console.log('posters: ', posters);

      setMovies((prev) => ({
        ...prev,
        movies: [...prev.movies, ...posters.data],
        currentPage: posters.offset,
        totalPages: posters.totalAmount / posters.limit - posters.offset,
      }));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(API_BASE);
  }, []);

  return { movies, error, loading, fetchMovies };
};

export default usePostersFetch;
