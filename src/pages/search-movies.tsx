import { API_SEARCH } from '@constants';
import { AddHeader } from 'components/header';
import MoviesList from 'components/movies-list/movies-list';
import { useApiRequest } from 'hooks/useApiRequest';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from 'redux/movies/movies.actions';
import { encodeURL } from 'utils/utils';
import { ParamTypes } from './types';

export const SearchMovies = () => {
  const { fetchData: getSearchMovies } = useApiRequest(
    'get',
    API_SEARCH,
    searchMovies,
  );

  const { slug } = useParams<ParamTypes>();
  const encode = encodeURL(slug);

  useEffect(() => {
    getSearchMovies(`${encode}&searchBy=title`);
  }, [slug]);

  return (
    <>
      <AddHeader />
      <MoviesList />
    </>
  );
};
