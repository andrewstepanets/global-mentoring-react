import React, { FC, SyntheticEvent, useCallback } from 'react';
import { useHistory } from 'react-router';
import { HeaderWrapper } from './styles';
import { SearchHeaderProps } from './types';
import { Button } from 'components/button';
import { Logo } from 'components/logo';
import { MovieDetails } from 'components/movie-details';

export const SearchHeader: FC<SearchHeaderProps> = ({
  movieDetails,
  loadingMovieDetails,
  errorMovieDetails,
}) => {
  const history = useHistory();

  const handleOnClick = useCallback((event: SyntheticEvent): void => {
    event.preventDefault();

    history.push('/');
  }, []);

  return (
    <HeaderWrapper>
      <div className="header-top">
        <Logo />

        <Button
          magnifier
          type="button"
          onClick={handleOnClick}
          text="&#x2315;"
        />
      </div>
      <MovieDetails
        movieDetails={movieDetails}
        loadingMovieDetails={loadingMovieDetails}
        errorMovieDetails={errorMovieDetails}
      />
    </HeaderWrapper>
  );
};
