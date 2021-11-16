import { AddHeader } from 'components/header';
import { MoviesList } from 'components/movies-list';
import { ModalsContext } from 'modal-context';
import React, { useContext } from 'react';

export const Home = () => {
  const {
    toggleDelete,
    toggleEdit,
    toggleAdd,
    setMovieDetails,
    setLoadingMovieDetails,
    setErrorMovieDetails,
  } = useContext(ModalsContext);
  return (
    <>
      <AddHeader hideAdd={toggleAdd} />
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
