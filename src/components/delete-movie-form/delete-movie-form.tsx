import { Button } from 'components/button';
import React, { FC } from 'react';
import {
  ButtonContainer,
  CloseButton,
  DeleteMovieContainer,
  DeleteMovieText,
  DeleteMovieTitle,
  DeleteMovieWrapper,
} from './styles';

export const DeleteMovieForm: FC = () => {
  return (
    <DeleteMovieWrapper>
      <DeleteMovieContainer>
        <CloseButton />
        <DeleteMovieTitle>Delete Movie</DeleteMovieTitle>
        <DeleteMovieText>
          Are you sure you want to delete this movie?
        </DeleteMovieText>
        <ButtonContainer>
          <Button submit type="submit" onClick={null} text="Confirm" />
        </ButtonContainer>
      </DeleteMovieContainer>
    </DeleteMovieWrapper>
  );
};
