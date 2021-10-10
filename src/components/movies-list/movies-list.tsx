import React, { FC } from 'react';
import { Filter } from './filter';
import Posters from './posters/posters';
import { Selection } from './selection';
import { FilterSelectionWrapper, MovieListWrapper } from './styles';

export interface MoviesListProps {
  setMovieDetails: {
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: string[];
    id: number;
  };
}

export const MoviesList: FC<MoviesListProps> = ({ setMovieDetails }) => (
  <MovieListWrapper>
    <FilterSelectionWrapper>
      <Filter />
      <Selection />
    </FilterSelectionWrapper>
    <Posters setMovieDetails={setMovieDetails} />
  </MovieListWrapper>
);
