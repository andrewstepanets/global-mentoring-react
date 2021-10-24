import useMoreDetailsMovie from 'hooks/useMoreDetailsMovie';
import React, { FC, useCallback, useEffect } from 'react';
import shortid from 'shortid';
import defaultImgMovie from '../../../../assets/images/fallback_movie.png';
import {
  PostersGenre,
  PostersImg,
  PostersItem,
  PostersLink,
  PostersTitle,
  PostersTitleYear,
  PostersWrapTitle,
} from './styles';

interface PosterItemProps {
  setMovieDetails: {
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    genres: string[];
    id: number;
  };
  poster: any;
  genre: any;
}

export const PosterItem: FC<PosterItemProps> = ({
  setMovieDetails,
  genre,
  poster,
}: any) => {
  const {
    movieDetails,
    loadingMovieDetails,
    errorMovieDetails,
    fetchMovieDetails,
  }: any = useMoreDetailsMovie();

  const handleMoreDetails = useCallback((id) => {
    fetchMovieDetails(id);
  }, []);

  useEffect(() => {
    setMovieDetails(movieDetails);
  }, [movieDetails]);

  const addDefaultSrc = useCallback(({ target }) => {
    target.src = defaultImgMovie;
    target.alt = 'image not found';
  }, []);

  return (
    <PostersItem key={shortid.generate()}>
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
