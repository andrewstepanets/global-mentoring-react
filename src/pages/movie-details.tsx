import { SearchHeader } from 'components/header';
import MoviesList from 'components/movies-list/movies-list';
import useMoreDetailsMovie from 'hooks/useMoreDetailsMovie';
import { ModalsContext } from 'modal-context';
import React, { memo, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ParamTypes } from './types';

const MovieDetails = () => {
  const {
    toggleDelete,
    toggleEdit,
    setMovieDetails,
    setLoadingMovieDetails,
    setErrorMovieDetails,
  } = useContext(ModalsContext);
  const { id } = useParams<ParamTypes>();
  const {
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
    fetchMovieDetails,
  } = useMoreDetailsMovie();

  useEffect(() => {
    fetchMovieDetails(id);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [id]);

  return (
    <>
      <SearchHeader
        movieDetails={movieDetails}
        loadingMovieDetails={loadingMovieDetails}
        errorMovieDetails={errorMovieDetails}
      />
      <MoviesList
        setMovieDetails={setMovieDetails}
        setLoadingMovieDetails={setLoadingMovieDetails}
        setErrorMovieDetails={setErrorMovieDetails}
        hideEdit={toggleEdit}
        hideDelete={toggleDelete}
      />
    </>
  );
};

export default memo(MovieDetails);
