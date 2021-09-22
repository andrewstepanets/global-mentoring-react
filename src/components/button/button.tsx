import React, { FC, SyntheticEvent } from 'react';
import { Button as ButtonStyled } from './styles';

interface ButtonProps {
  text: string;
  onClick: (event: SyntheticEvent<Element, Event>) => void;
  type?: 'submit' | 'button' | 'reset';
  button?: boolean;
  submit?: boolean;
  reset?: boolean;
}

export const Button: FC<ButtonProps> = ({ text, onClick, ...props }) => (
  <ButtonStyled onClick={onClick} {...props}>
    {text}
  </ButtonStyled>
);
