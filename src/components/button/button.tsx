import * as React from 'react';
import { Button as ButtonStyled } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ text, onClick, ...props }) => (
  <ButtonStyled onClick={onClick} {...props}>
    {text}
  </ButtonStyled>
);
