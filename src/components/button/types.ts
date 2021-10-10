import { SyntheticEvent } from 'react';

type ButtonType = 'submit' | 'button' | 'reset';

export interface ButtonProps {
  text: string;
  onClick?: (event: SyntheticEvent<Element, Event>) => void;
  type?: ButtonType;
  button?: boolean;
  submit?: boolean;
  reset?: boolean;
  magnifier?: boolean;
  load?: boolean;
}

export interface StyledButtonProps {
  button?: boolean;
  submit?: boolean;
  reset?: boolean;
  load?: boolean;
  magnifier?: boolean;
}
