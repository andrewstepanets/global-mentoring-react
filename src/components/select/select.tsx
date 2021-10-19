import React, { FC, useState } from 'react';
import { SelectMain, SelectTitle, SelectWrapper } from './styles';
import { SelectProps } from './types';

export const Select: FC<SelectProps> = ({ data, onSelectChange }) => {
  const [dataSelect, setDataSelect] = useState(data);
  const [selectedData, setSelectedData] = useState('');

  const handleChange = ({ target }) => {
    setSelectedData(target.value);
    if (onSelectChange) onSelectChange(selectedData);
  };

  return (
    <SelectWrapper>
      <SelectTitle>Genre</SelectTitle>
      <SelectMain name="genre" onChange={handleChange}>
        <option hidden>Select Genre</option>
        {dataSelect.map((data) => (
          <option key={`${data.id}-${data.name}`} value={data.id}>
            {data.name}
          </option>
        ))}
      </SelectMain>
    </SelectWrapper>
  );
};
