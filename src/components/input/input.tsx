import React, { FC, FormEvent } from 'react';
import { InputBlock } from './styles';

export interface InputProps {
  autoComplete?: string;
  calendar?: string;
  name: string;
  label: string | null;
  placeholder: string;
  search?: boolean;
  type: string;
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
  label,
  name,
  autoComplete,
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
      autoComplete={autoComplete}
    />
  </InputBlock>
);
