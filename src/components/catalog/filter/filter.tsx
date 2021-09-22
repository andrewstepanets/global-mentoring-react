import { filterData } from 'data/filter-sort-data';
import React, { FC } from 'react';
import { FilterList, FilterListItem } from './styles';

export const Filter: FC = () => (
  <FilterList>
    {filterData.map((item) => (
      <FilterListItem key={item}>{item}</FilterListItem>
    ))}
  </FilterList>
);
