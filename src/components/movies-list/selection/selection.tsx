import { SELECTION_DATA } from '@constants';
import { getSortByMovies } from 'api';
import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  SelectionContainer,
  SelectionOption,
  SelectionSelect,
  SelectionTitle,
} from './styles';

export const Selection: FC = () => {
  const dispatch = useDispatch();

  const handleOnItem = useCallback(({ target }) => {
    const sortBy = target.value;

    console.log('sortBy: ', sortBy);

    dispatch(getSortByMovies(sortBy));
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
