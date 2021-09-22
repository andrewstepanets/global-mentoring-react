import React, { FC, FormEvent } from 'react';
import { InputBlock } from './styles';

export interface InputProps {
  name: string;
  label: string | null;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  search?: boolean;
  topic?: boolean;
  release?: boolean;
  movie?: boolean;
  genre?: boolean;
  overview?: boolean;
  runtime?: boolean;
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  label,
  name,
  ...props
}) => (
  <InputBlock placeholder={placeholder} {...props}>
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  </InputBlock>
);
