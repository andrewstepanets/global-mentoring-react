import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { NoMatchWrapper, NoMatchImage, NoMatchMessage } from './styles';

import fourZeroFourImg from '../assets/images/four_zero_four.png';
import { Logo } from 'components/logo';
import { Button } from 'components/button';

export const NoMatch: FC = () => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push('/');
  };

  return (
    <NoMatchWrapper>
      <Logo />
      <NoMatchMessage>Page Not Found</NoMatchMessage>
      <NoMatchImage src={fourZeroFourImg} alt="NoMatch" />
      <Button
        reset
        type="button"
        onClick={handleOnClick}
        text="Go back to home"
      />
    </NoMatchWrapper>
  );
};
