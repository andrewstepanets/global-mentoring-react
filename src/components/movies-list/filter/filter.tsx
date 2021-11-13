import { API_BASE, API_FILTER, FILTER_DATA } from '@constants';
import { useApiRequest } from 'hooks/useApiRequest';
import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchMovies, filterItem, filterMovies } from 'redux/actions';
import { FilterItem, FilterList } from './styles';

export const Filter: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [active, setActive] = useState('all');
  const { fetchData: getMovies } = useApiRequest('get', API_BASE, fetchMovies);
  const { fetchData: filteredMovies } = useApiRequest(
    'get',
    `${API_FILTER}`,
    filterMovies,
  );

  const handleOnItem = useCallback((genre) => {
    history.push('/');
    setActive(genre);
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
        <FilterItem
          key={item}
          onClick={() => handleOnItem(item)}
          active={active}
          item={item}
        >
          {item}
        </FilterItem>
      ))}
    </FilterList>
  );
};
