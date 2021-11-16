import { getMoreMovies, getMovies } from 'api';
import { Button } from 'components/button';
import React, { FC, memo, useCallback, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
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
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies);
  const currentPage = useSelector(({ movies: { currentPage } }) => currentPage);
  const error = useSelector(({ movies: { error } }) => error);
  const loading = useSelector(({ movies: { loading } }) => loading);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const handleLoadMoreMovies = useCallback(() => {
    dispatch(getMoreMovies(currentPage));
    console.log(currentPage);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }, [currentPage]);

  const posters = movies.items.map((poster) => {
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
            <span>{movies.items.length}</span> movie found
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
