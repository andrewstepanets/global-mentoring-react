import { IMovieDetails } from 'components/movies-list/posters/types';
import React, { FC, useCallback } from 'react';
import Loader from 'react-loader-spinner';
import defaultImgMovie from '../../assets/images/fallback_movie.png';
import {
  MovieDetailsArticle,
  MovieDetailsAverage,
  MovieDetailsDate,
  MovieDetailsDescription,
  MovieDetailsError,
  MovieDetailsImage,
  MovieDetailsTime,
  MovieDetailsTitle,
  MovieDetailsTitleContainer,
  MovieDetailsWin,
  MovieDetailsWrapper,
  MovieDetailsYear,
} from './styles';

interface MovieDetailsProps {
  loadingMovieDetails: boolean;
  errorMovieDetails: boolean;
  movieDetails: IMovieDetails;
}

export const MovieDetails: FC<MovieDetailsProps> = ({
  movieDetails,
  loadingMovieDetails,
  errorMovieDetails,
}) => {
  const {
    poster_path,
    title,
    vote_average,
    tagline,
    release_date,
    runtime,
    overview,
  } = movieDetails;

  const addDefaultSrc = useCallback(({ target }) => {
    target.src = defaultImgMovie;
    target.alt = 'Image not found';
  }, []);

  return (
    <MovieDetailsWrapper>
      {errorMovieDetails && (
        <MovieDetailsError>No Movie Details Found</MovieDetailsError>
      )}
      {loadingMovieDetails && (
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      )}
      {!errorMovieDetails && !loadingMovieDetails && (
        <>
          <MovieDetailsImage
            src={poster_path}
            alt={title}
            onError={addDefaultSrc}
          />
          <MovieDetailsDescription>
            <MovieDetailsTitleContainer>
              <MovieDetailsTitle>{title}</MovieDetailsTitle>
              <MovieDetailsAverage>{vote_average}</MovieDetailsAverage>
            </MovieDetailsTitleContainer>
            <MovieDetailsWin>{tagline}</MovieDetailsWin>
            <MovieDetailsDate>
              <MovieDetailsYear>{release_date}</MovieDetailsYear>
              <MovieDetailsTime>{`${runtime} min`}</MovieDetailsTime>
            </MovieDetailsDate>
            <MovieDetailsArticle>{overview}</MovieDetailsArticle>
          </MovieDetailsDescription>
        </>
      )}
    </MovieDetailsWrapper>
  );
};
