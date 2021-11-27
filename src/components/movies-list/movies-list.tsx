import React, { FC, memo, useContext } from 'react';
import { Filter } from './filter';
import Posters from './posters/posters';
import { PostersProps } from './posters/types';
import { Selection } from './selection';
import { ModalsContext } from 'modal-context';
import { FilterSelectionWrapper, MovieListWrapper } from './styles';

const MoviesList: FC = () => {
  return (
    <MovieListWrapper>
      <FilterSelectionWrapper>
        <Filter />
        <Selection />
      </FilterSelectionWrapper>
      <Posters />
    </MovieListWrapper>
  );
};
export default memo(MoviesList);
