import { ChangeEvent } from 'react';

export interface SelectProps {
  value: any[];
  selected?: any[];
  setSelected?: any;
  name: string;
  onChange: (event: ChangeEvent<HTMLSelectElement> | string[]) => void;
}
