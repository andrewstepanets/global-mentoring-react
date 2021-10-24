import { deleteMovieFetch } from 'api';
import { Button } from 'components/button';
import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonContainer,
  CloseButton,
  DeleteMovieContainer,
  DeleteMovieText,
  DeleteMovieTitle,
  DeleteMovieWrapper,
} from './styles';

interface DeleteMovieFormProps {
  hideDelete: () => void;
}

export const DeleteMovieForm: FC<DeleteMovieFormProps> = ({ hideDelete }) => {
  const dispatch = useDispatch();
  const posterId = useSelector(({ movies: { posterId } }) => posterId);

  const handleConfirm = useCallback(() => {
    dispatch(deleteMovieFetch(posterId));
    hideDelete();
  }, []);

  return (
    <DeleteMovieWrapper>
      <DeleteMovieContainer>
        <CloseButton onClick={hideDelete} />
        <DeleteMovieTitle>Delete Movie</DeleteMovieTitle>
        <DeleteMovieText>
          Are you sure you want to delete this movie?
        </DeleteMovieText>
        <ButtonContainer>
          <Button submit type="submit" onClick={handleConfirm} text="Confirm" />
        </ButtonContainer>
      </DeleteMovieContainer>
    </DeleteMovieWrapper>
  );
};
