import { API_BASE, API_FILTER, API_PAGE, API_SEARCH } from '@constants';
import { Button } from 'components/button';
import { useApiRequest } from 'hooks/useApiRequest';
import { ParamTypes } from 'pages/types';
import React, { FC, memo, useCallback, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovies, filterMovies } from 'redux/movies/movies.actions';
import { AppState } from 'redux/root-reducer';
import shortid from 'shortid';
import { encodeURL } from 'utils/utils';
import PosterItem from './poster-item/poster-item';
import {
  NumberMovies,
  PostersError,
  PostersList,
  PostersWrapper,
} from './styles';
import { PostersProps } from './types';

const Posters: FC<PostersProps> = ({
  setMovieDetails,
  setLoadingMovieDetails,
  setErrorMovieDetails,
}) => {
  const typedUseSelector: TypedUseSelectorHook<AppState> = useSelector;
  const filterItem = typedUseSelector(
    ({ movies: { filterItem } }) => filterItem,
  );
  const movies = typedUseSelector(({ movies: { items } }) => items);
  const currentPage = typedUseSelector(
    ({ movies: { currentPage } }) => currentPage,
  );
  const error = typedUseSelector(({ movies: { error } }) => error);
  const loading = typedUseSelector(({ movies: { loading } }) => loading);
  const totalPages = typedUseSelector(
    ({ movies: { totalPages } }) => totalPages,
  );
  const { fetchData: getMovies } = useApiRequest('get', API_BASE, fetchMovies);
  const { fetchData: getMoreMovies } = useApiRequest(
    'get',
    API_PAGE,
    fetchMovies,
  );
  const { slug } = useParams<ParamTypes>();
  const encode = encodeURL(slug);
  const { fetchData: filteredMovies } = useApiRequest(
    'get',
    encode !== 'undefined'
      ? `${API_SEARCH}${encode}&searchBy=title`
      : `${API_FILTER}${filterItem}`,
    filterMovies,
  );

  useEffect(() => {
    getMovies();
  }, []);

  const handleLoadMoreMovies = useCallback(() => {
    if (filterItem !== 'all' || encode !== 'undefined') {
      filteredMovies(`&offset=${currentPage}`);
    } else {
      getMoreMovies(currentPage);
    }
  }, [currentPage, filterItem]);

  const posters = movies.map((poster) => {
    if (!poster.genres) poster.genres = [];

    const genre = poster.genres.map((genre) => (
      <span key={shortid.generate()}> {genre}, </span>
    ));

    return (
      <PosterItem
        key={shortid.generate()}
        setMovieDetails={setMovieDetails}
        setLoadingMovieDetails={setLoadingMovieDetails}
        setErrorMovieDetails={setErrorMovieDetails}
        poster={poster}
        genre={genre}
      />
    );
  });

  return (
    <PostersWrapper>
      {error && <PostersError>{error}</PostersError>}
      {loading && (
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      )}
      {!error && !loading && (
        <>
          {' '}
          <NumberMovies id="number-of-movies">
            <span>{movies.size}</span> movie found
          </NumberMovies>
          <PostersList>{posters}</PostersList>
          {totalPages > 1 && (
            <Button
              load
              text="Load more posters"
              type="button"
              onClick={handleLoadMoreMovies}
            />
          )}
        </>
      )}
    </PostersWrapper>
  );
};

export default memo(Posters);
