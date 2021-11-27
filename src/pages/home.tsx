import { AddHeader } from 'components/header';
import MoviesList from 'components/movies-list/movies-list';
import React from 'react';

export const Home = () => {
  return (
    <>
      <AddHeader />
      <MoviesList />
    </>
  );
};
