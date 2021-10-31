import React, { FC } from 'react';
import {
  CloseIcon,
  CongratulationsText,
  CongratulationsTitle,
  CongratulationsWrapper,
  DoneIcon,
} from './styles';

interface CongratulationsProps {
  hideCongratulations: () => void;
}

export const Congratulations: FC<CongratulationsProps> = ({
  hideCongratulations,
}) => {
  return (
    <CongratulationsWrapper>
      <CloseIcon
        onClick={() => {
          hideCongratulations();
        }}
      />
      <DoneIcon />
      <CongratulationsTitle>Congratulations!</CongratulationsTitle>
      <CongratulationsText>
        The movie has been added to database successfully!
      </CongratulationsText>
    </CongratulationsWrapper>
  );
};
