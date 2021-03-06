import { API_SORT_BY, SELECTION_DATA } from '@constants';
import { useApiRequest } from 'hooks/useApiRequest';
import React, { FC, useCallback } from 'react';
import { filterMovies } from 'redux/actions';
import {
  SelectionContainer,
  SelectionOption,
  SelectionSelect,
  SelectionTitle,
} from './styles';

export const Selection: FC = () => {
  const { fetchData: fetchSortByMovies } = useApiRequest(
    'get',
    API_SORT_BY,
    filterMovies,
  );

  const handleOnItem = useCallback(({ target }) => {
    const sortBy = target.value;
    fetchSortByMovies(sortBy);
  }, []);

  return (
    <SelectionContainer>
      <SelectionTitle>Sort by</SelectionTitle>
      <SelectionSelect onChange={handleOnItem}>
        {SELECTION_DATA.map((item) => (
          <SelectionOption key={item} value={item}>
            {item}
          </SelectionOption>
        ))}
      </SelectionSelect>
    </SelectionContainer>
  );
};
