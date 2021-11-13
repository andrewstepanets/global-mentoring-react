import React, { FC, FormEvent, forwardRef, Ref } from 'react';
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
  ref?: Ref<HTMLInputElement>;
  onKeyDown?: any;
}

export const Input: FC<InputProps> = forwardRef(
  (
    {
      type,
      placeholder,
      onChange,
      value,
      label,
      name,
      autoComplete,
      disabled,
      ...props
    },
    ref,
  ) => (
    <InputBlock {...props}>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        autoComplete={autoComplete}
        disabled={disabled}
        ref={ref}
      />
    </InputBlock>
  ),
);
