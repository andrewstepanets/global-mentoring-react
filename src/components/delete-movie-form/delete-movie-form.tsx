import { API_DELETE } from '@constants';
import { Button } from 'components/button';
import { useApiRequest } from 'hooks/useApiRequest';
import React, { FC, useCallback } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { deleteMovie } from 'redux/actions';
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
  const posterId = useSelector(
    ({ movies: { posterId } }: RootStateOrAny) => posterId,
  );
  const { fetchData: deleteMovieFetch } = useApiRequest(
    'delete',
    API_DELETE,
    deleteMovie,
  );

  const handleConfirm = useCallback(() => {
    deleteMovieFetch(posterId);
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
