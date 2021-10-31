import { API_BASE, API_FILTER, API_PAGE } from '@constants';
import { Button } from 'components/button';
import { useApiRequest } from 'hooks/useApiRequest';
import React, { FC, memo, useCallback, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { fetchMovies, filterMovies } from 'redux/actions';
import shortid from 'shortid';
import { PosterItem } from './poster-item';
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
  hideEdit,
  hideDelete,
}) => {
  const filterItem = useSelector(({ movies: { filterItem } }) => filterItem);
  const movies = useSelector(({ movies: { items } }) => items);
  const currentPage = useSelector(({ movies: { currentPage } }) => currentPage);
  const error = useSelector(({ movies: { error } }) => error);
  const loading = useSelector(({ movies: { loading } }) => loading);
  const { fetchData: getMovies } = useApiRequest('get', API_BASE, fetchMovies);
  const { fetchData: getMoreMovies } = useApiRequest(
    'get',
    API_PAGE,
    fetchMovies,
  );
  const { fetchData: filteredMovies } = useApiRequest(
    'get',
    `${API_FILTER}${filterItem}`,
    filterMovies,
  );

  useEffect(() => {
    getMovies();
  }, []);

  const handleLoadMoreMovies = useCallback(() => {
    if (filterItem !== 'all') {
      filteredMovies(`&offset=${currentPage}`);
    } else {
      getMoreMovies(currentPage);
    }
  }, [currentPage, filterItem]);

  useEffect(() => {
    if (currentPage === 1) {
      return;
    } else {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [currentPage]);

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
        hideEdit={hideEdit}
        hideDelete={hideDelete}
      />
    );
  });

  return (
    <PostersWrapper>
      {error && <PostersError>No Movie Found</PostersError>}
      {loading && (
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      )}
      {!error && !loading && (
        <>
          {' '}
          <NumberMovies>
            <span>{movies.length}</span> movie found
          </NumberMovies>
          <PostersList>{posters}</PostersList>
          <Button
            load
            text="Load more posters"
            type="button"
            onClick={handleLoadMoreMovies}
          />
        </>
      )}
    </PostersWrapper>
  );
};

export default memo(Posters);
