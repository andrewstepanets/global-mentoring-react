import { Button } from 'components/button';
import { Logo } from 'components/logo';
import { MovieDetails } from 'components/movie-details';
import { IMovieDetails } from 'components/movies-list/posters/types';
import { SearchBlock } from 'components/search-block';
import React, { FC, SyntheticEvent, useCallback } from 'react';
import { HeaderWrapper } from './styles';
interface HeaderProps {
  loadingMovieDetails: boolean;
  errorMovieDetails: boolean;
  movieDetails: IMovieDetails;
  hide: () => void;
}

export const Header: FC<HeaderProps> = ({
  hide,
  movieDetails,
  loadingMovieDetails,
  errorMovieDetails,
}) => {
  const handleOnClick = useCallback((event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('click: ', event);
  }, []);

  const showByCondition = errorMovieDetails || movieDetails;

  return (
    <HeaderWrapper>
      <div className="header-top">
        <Logo />
        {showByCondition && (
          <Button
            magnifier
            type="button"
            onClick={handleOnClick}
            text="&#x2315;"
          />
        )}
        {!showByCondition && (
          <Button button type="button" onClick={hide} text="+ Add Movie" />
        )}
      </div>
      {showByCondition && (
        <MovieDetails
          movieDetails={movieDetails}
          loadingMovieDetails={loadingMovieDetails}
          errorMovieDetails={errorMovieDetails}
        />
      )}
      {!showByCondition && <SearchBlock />}
    </HeaderWrapper>
  );
};
