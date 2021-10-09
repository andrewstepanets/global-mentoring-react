import { sortData } from 'data/filter-sort-data';
import React, { FC } from 'react';
import { SortingList, SortingListItem } from './styles';

export const Sorting: FC = () => (
  <SortingList>
    {sortData.map((item) => (
      <SortingListItem key={item}>{item}</SortingListItem>
    ))}
  </SortingList>
);
