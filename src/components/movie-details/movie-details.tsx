import React, { FC, useCallback } from 'react';
import defaultImgMovie from '../../assets/images/fallback_movie.png';
import {
  MovieDetailsArticle,
  MovieDetailsAverage,
  MovieDetailsDate,
  MovieDetailsDescription,
  MovieDetailsImage,
  MovieDetailsTime,
  MovieDetailsTitle,
  MovieDetailsTitleContainer,
  MovieDetailsWin,
  MovieDetailsWrapper,
  MovieDetailsYear,
} from './styles';

interface MovieDetailsProps {
  movieDetails: {
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
}

export const MovieDetails: FC<MovieDetailsProps> = ({ movieDetails }) => {
  console.log('componentMovieDetails: ', movieDetails);

  const addDefaultSrc = useCallback(({ target }) => {
    target.src = defaultImgMovie;
    target.alt = 'Image not found';
  }, []);

  return (
    <MovieDetailsWrapper>
      <MovieDetailsImage
        src={movieDetails.poster_path}
        alt={movieDetails.title}
        onError={addDefaultSrc}
      />
      <MovieDetailsDescription>
        <MovieDetailsTitleContainer>
          <MovieDetailsTitle>{movieDetails.title}</MovieDetailsTitle>
          <MovieDetailsAverage>{movieDetails.vote_average}</MovieDetailsAverage>
        </MovieDetailsTitleContainer>
        <MovieDetailsWin>{movieDetails.tagline}</MovieDetailsWin>
        <MovieDetailsDate>
          <MovieDetailsYear>{movieDetails.release_date}</MovieDetailsYear>
          <MovieDetailsTime>{`${movieDetails.runtime} min`}</MovieDetailsTime>
        </MovieDetailsDate>
        <MovieDetailsArticle>{movieDetails.overview}</MovieDetailsArticle>
      </MovieDetailsDescription>
    </MovieDetailsWrapper>
  );
};
