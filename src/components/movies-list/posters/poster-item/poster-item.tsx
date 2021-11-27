import { DropdownMenu } from 'components/dropdown-menu';
import * as React from 'react';
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

export const PosterItem: React.FC<PosterItemProps> = ({ genre, poster }) => {
  const addDefaultSrc = React.useCallback(({ target }) => {
    target.src = defaultImgMovie;
    target.alt = 'image not found';
  }, []);

  return (
    <PostersItem key={poster.id}>
      <DropdownMenu posterId={poster.id} />
      <PostersLink id="poster-link" to={`/film/${poster.id}`}>
        <PostersImg
          src={poster.poster_path}
          alt={poster.title}
          onError={addDefaultSrc}
        />
        <PostersWrapTitle id="poster-title">
          <PostersTitle>{poster.title}</PostersTitle>
          <PostersTitleYear>{poster.release_date}</PostersTitleYear>
        </PostersWrapTitle>
        <PostersGenre>{genre}</PostersGenre>
      </PostersLink>
    </PostersItem>
  );
};
