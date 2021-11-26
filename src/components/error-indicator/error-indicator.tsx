import React, { FC } from 'react';
import { ErrorIndicatorMessage, ErrorIndicatorWrapper } from './styles';
import { Redirect } from 'react-router-dom';
import { Button } from 'components/button';

export interface ErrorIndicatorProps {
  handleCloseError: () => void;
}

export const ErrorIndicator: FC<ErrorIndicatorProps> = ({
  handleCloseError,
}) => {
  const handleOnClick = () => {
    <Redirect to="/" />;
    handleCloseError();
  };
  return (
    <ErrorIndicatorWrapper>
      <ErrorIndicatorMessage>Something went wrong</ErrorIndicatorMessage>
      <Button
        reset
        type="button"
        onClick={handleOnClick}
        text="Go back to home"
      />
    </ErrorIndicatorWrapper>
  );
};
