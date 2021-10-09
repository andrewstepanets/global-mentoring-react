import React, { FC } from 'react';
import { Button as ButtonStyled } from './styles';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ text, onClick, ...props }) => (
  <ButtonStyled onClick={onClick} {...props}>
    {text}
  </ButtonStyled>
);
