import { ChangeEvent } from 'react';

export interface SelectProps {
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
