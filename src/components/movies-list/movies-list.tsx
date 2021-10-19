import React, { FC } from 'react';
import { Filter } from './filter';
import { PostersOverview } from './posters-overview';
import { Sorting } from './sorting';
import { FilterSortingWrapper, MoviesAmount } from './styles';

export const MoviesList: FC = () => (
  <>
    <FilterSortingWrapper>
      <Filter />
      <Sorting />
    </FilterSortingWrapper>
    <MoviesAmount>
      <span>10</span> movie found
    </MoviesAmount>
    <PostersOverview />
  </>
);
