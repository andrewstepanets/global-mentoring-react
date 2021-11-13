import { DropdownMenu } from 'components/dropdown-menu';
import React, { FC, useCallback } from 'react';
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

import defaultImgMovie from '../../../../assets/images/fallback_movie.png';

export const PosterItem: FC<PosterItemProps> = ({
  genre,
  poster,
  hideEdit,
  hideDelete,
}: any) => {
  const addDefaultSrc = useCallback(({ target }) => {
    target.src = defaultImgMovie;
    target.alt = 'image not found';
  }, []);

  return (
    <PostersItem key={poster.id}>
      <DropdownMenu
        hideEdit={hideEdit}
        hideDelete={hideDelete}
        posterId={poster.id}
      />
      <PostersLink to={`/film/${poster.id}`}>
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
