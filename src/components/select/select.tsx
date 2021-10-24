import { SELECT_OPTIONS } from '@constants';
import React, { FC } from 'react';
import shortid from 'shortid';
import { SelectMain, SelectTitle, SelectWrapper } from './styles';
import { SelectProps } from './types';

export const Select: FC<SelectProps> = ({ onChange, name }) => {
  const options = SELECT_OPTIONS.map((option) => (
    <option key={shortid.generate()}>{option}</option>
  ));

  return (
    <SelectWrapper>
      <SelectTitle>Genre</SelectTitle>
      <SelectMain name={name} onChange={onChange}>
        <option hidden>Select Genre</option>
        {options}
      </SelectMain>
    </SelectWrapper>
  );
};
