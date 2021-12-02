import { AddHeader } from 'components/header';
import MoviesList from 'components/movies-list/movies-list';
import { ModalsContext } from 'modal-context/modal-context';
import React, { useContext } from 'react';

export const Home = () => {
  const { setMovieDetails, setLoadingMovieDetails, setErrorMovieDetails } =
    useContext(ModalsContext);
  return (
    <>
      <AddHeader />
      <MoviesList
        setMovieDetails={setMovieDetails}
        setLoadingMovieDetails={setLoadingMovieDetails}
        setErrorMovieDetails={setErrorMovieDetails}
      />
    </>
  );
};
