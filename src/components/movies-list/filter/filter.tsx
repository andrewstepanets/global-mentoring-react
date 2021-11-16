import { API_BASE, API_FILTER, FILTER_DATA } from '@constants';
import { useApiRequest } from 'hooks/useApiRequest';
import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies, filterItem, filterMovies } from 'redux/actions';
import { FilterItem, FilterList } from './styles';

export const Filter: FC = () => {
  const dispatch = useDispatch();

  const { fetchData: getMovies } = useApiRequest('get', API_BASE, fetchMovies);
  const { fetchData: filteredMovies } = useApiRequest(
    'get',
    `${API_FILTER}`,
    filterMovies,
  );

  const handleOnItem = useCallback((genre) => {
    dispatch(filterItem(genre));
    if (genre === 'all') {
      getMovies();
    } else {
      filteredMovies(genre);
    }
  }, []);

  return (
    <FilterList>
      {FILTER_DATA.map((item) => (
        <FilterItem key={item} onClick={() => handleOnItem(item)}>
          {item}
        </FilterItem>
      ))}
    </FilterList>
  );
};
