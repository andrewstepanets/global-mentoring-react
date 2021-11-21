import React, { FC, memo } from 'react';
import { Filter } from './filter';
import Posters from './posters/posters';
import { PostersProps } from './posters/types';
import { Selection } from './selection';
import { FilterSelectionWrapper, MovieListWrapper } from './styles';

export interface MoviesListProps extends PostersProps {
  setLoadingMovieDetails: boolean;
  setErrorMovieDetails: boolean;
  hideEdit: () => void;
  hideDelete: () => void;
}

const MoviesList: FC<MoviesListProps> = ({
  setMovieDetails,
  setLoadingMovieDetails,
  setErrorMovieDetails,
  hideEdit,
  hideDelete,
}) => (
  <MovieListWrapper>
    <FilterSelectionWrapper>
      <Filter />
      <Selection />
    </FilterSelectionWrapper>
    <Posters
      setMovieDetails={setMovieDetails}
      setLoadingMovieDetails={setLoadingMovieDetails}
      setErrorMovieDetails={setErrorMovieDetails}
      hideEdit={hideEdit}
      hideDelete={hideDelete}
    />
  </MovieListWrapper>
);

export default memo(MoviesList);
