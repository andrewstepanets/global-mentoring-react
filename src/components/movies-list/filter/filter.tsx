import { FILTER_DATA } from '@constants';
import React, { FC } from 'react';
import { FilterItem, FilterList } from './styles';

export const Filter: FC = () => (
  <FilterList>
    {FILTER_DATA.map((item) => (
      <FilterItem key={item}>{item}</FilterItem>
    ))}
  </FilterList>
);
