import { SELECTION_DATA } from '@constants';
import React, { FC } from 'react';
import { SelectionItem, SelectionList } from './styles';

export const Selection: FC = () => (
  <SelectionList>
    {SELECTION_DATA.map((item) => (
      <SelectionItem key={item}>{item}</SelectionItem>
    ))}
  </SelectionList>
);
