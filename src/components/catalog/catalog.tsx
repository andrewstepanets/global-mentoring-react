import React, { FC } from 'react';
import { Filter } from './filter';
import { PostersOverview } from './posters-overview';
import { Sorting } from './sorting';
import { FilterSortingWrapper, NumberMovies } from './styles';

export const Catalog: FC = () => (
  <>
    <FilterSortingWrapper>
      <Filter />
      <Sorting />
    </FilterSortingWrapper>
    <NumberMovies>
      <span>10</span> movie found
    </NumberMovies>
    <PostersOverview />
  </>
);
