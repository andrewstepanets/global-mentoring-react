import React, { FC, FormEvent } from 'react';
import { InputBlock } from './styles';

export interface InputProps {
  name: string;
  label: string | null;
  type: string;
  value: string;
  autoComplete?: string;
  calendar?: string;
  disabled?: boolean;
  placeholder?: string;
  search?: boolean;
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
  disabled,
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
      disabled={disabled}
    />
  </InputBlock>
);
