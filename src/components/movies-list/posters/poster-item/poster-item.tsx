import { DropdownMenu } from 'components/dropdown-menu';
import useMoreDetailsMovie from 'hooks/useMoreDetailsMovie';
import React, { FC, useCallback, useEffect } from 'react';
import shortid from 'shortid';
import { addDefaultSrc } from 'utils/utils';
import { PosterItemProps } from '../types';
import {
  PostersGenre,
  PostersImg,
  PostersItem,
  PostersLink,
  PostersTitle,
  PostersTitleYear,
  PostersWrapTitle,
} from './styles';

export const PosterItem: FC<PosterItemProps> = ({
  setMovieDetails,
  setLoadingMovieDetails,
  setErrorMovieDetails,
  genre,
  poster,
  hideEdit,
  hideDelete,
}: any) => {
  const {
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
    fetchMovieDetails,
  } = useMoreDetailsMovie();

  const handleMoreDetails = useCallback((id) => {
    fetchMovieDetails(id);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    setLoadingMovieDetails(loadingMovieDetails);
    setErrorMovieDetails(errorMovieDetails);
    setMovieDetails(movieDetails);
  }, [movieDetails, loadingMovieDetails, errorMovieDetails]);

  return (
    <PostersItem key={shortid.generate()}>
      <DropdownMenu
        hideEdit={hideEdit}
        hideDelete={hideDelete}
        posterId={poster.id}
      />
      <PostersLink onClick={() => handleMoreDetails(poster.id)}>
        <PostersImg
          src={poster.poster_path}
          alt={poster.title}
          onError={addDefaultSrc}
        />
        <PostersWrapTitle>
          <PostersTitle>{poster.title}</PostersTitle>
          <PostersTitleYear>{poster.release_date}</PostersTitleYear>
        </PostersWrapTitle>
        <PostersGenre>{genre}</PostersGenre>
      </PostersLink>
    </PostersItem>
  );
};
