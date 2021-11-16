import { FILTER_DATA } from '@constants';
import { getFilterMovies, getMovies } from 'api';
import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FilterItem, FilterList } from './styles';

export const Filter: FC = () => {
  const dispatch = useDispatch();

  const handleOnItem = useCallback(({ currentTarget }) => {
    const genre = currentTarget.innerHTML;

    if (genre === 'all') {
      dispatch(getMovies());
    } else {
      dispatch(getFilterMovies(genre));
    }
  }, []);

  return (
    <FilterList>
      {FILTER_DATA.map((item) => (
        <FilterItem key={item} onClick={handleOnItem}>
          {item}
        </FilterItem>
      ))}
    </FilterList>
  );
};
