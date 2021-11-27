import { SELECT_OPTIONS } from '@constants';
import * as React from 'react';
import {
  SelectInput,
  SelectLabel,
  SelectMain,
  SelectOver,
  SelectTitle,
  SelectWrapper,
} from './styles';
import { SelectProps } from './types';

export const Select: React.FC<SelectProps> = ({ selected, onChange }) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleOnSelected = React.useCallback(
    (selectedOption) => {
      if (selected.includes(selectedOption)) {
        const newSelected = selected.filter(
          (option) => option !== selectedOption,
        );
        onChange(newSelected);
      } else {
        const newSelected = [...selected, selectedOption];
        onChange(newSelected);
      }
    },
    [selected],
  );

  const options = SELECT_OPTIONS.map((option) => {
    return (
      <SelectLabel key={option}>
        <SelectInput
          type="checkbox"
          id={option}
          onChange={() => {
            handleOnSelected(option);
          }}
        />
        {option}
      </SelectLabel>
    );
  });

  const value = selected.join(' ');

  return (
    <SelectWrapper>
      <SelectTitle>Genre</SelectTitle>
      <SelectMain
        defaultValue={value}
        type="text"
        onClick={() => setOpen((isOpen) => !isOpen)}
        placeholder="Select Genre"
      ></SelectMain>
      {isOpen && <SelectOver>{options}</SelectOver>}
    </SelectWrapper>
  );
};
