import React, { FC } from 'react';
import { ErrorIndicatorMessage, ErrorIndicatorWrapper } from './styles';

export const ErrorIndicator: FC = () => {
  return (
    <ErrorIndicatorWrapper>
      <ErrorIndicatorMessage>Something went wrong</ErrorIndicatorMessage>
    </ErrorIndicatorWrapper>
  );
};
