import React, { FC } from 'react';
import postersInfoData from '../../../data/posters-info-data';
import {
  PostersGenre,
  PostersImg,
  PostersList,
  PostersListItem,
  PostersOverviewWrapper,
  PostersTitle,
  PostersTitleYear,
  PostersWrapTitle,
} from './styles';

export const PostersOverview: FC = () => (
  <PostersOverviewWrapper>
    <PostersList>
      {postersInfoData.map((poster) => (
        <PostersListItem key={poster.id}>
          <PostersImg src={poster.poster} alt={poster.title} />
          <PostersWrapTitle>
            <PostersTitle>{poster.title}</PostersTitle>
            <PostersTitleYear>{poster.year}</PostersTitleYear>
          </PostersWrapTitle>
          <PostersGenre>{poster.genre}</PostersGenre>
        </PostersListItem>
      ))}
    </PostersList>
  </PostersOverviewWrapper>
);
