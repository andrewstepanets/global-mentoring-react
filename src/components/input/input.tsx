import * as React from 'react';
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
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  ref?: React.Ref<HTMLInputElement>;
  onKeyDown?: any;
}

export const Input: React.FC<InputProps> = React.forwardRef(
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
