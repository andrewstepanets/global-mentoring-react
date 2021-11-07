import { Button } from 'components/button';
import { Logo } from 'components/logo';
import { MovieDetails } from 'components/movie-details';
import { SearchBlock } from 'components/search-block';
import { ParamTypes } from 'pages/types';
import React, { FC, SyntheticEvent, useCallback } from 'react';
import { Route, useParams } from 'react-router-dom';
import { HeaderWrapper } from './styles';
import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = ({
  hide,
  movieDetails,
  loadingMovieDetails,
  errorMovieDetails,
}) => {
  const { id } = useParams<ParamTypes>();
  console.log(id);

  const handleOnClick = useCallback((event: SyntheticEvent): void => {
    event.preventDefault();
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
        <Route path={`film/${id}`}>
          <MovieDetails
            movieDetails={movieDetails}
            loadingMovieDetails={loadingMovieDetails}
            errorMovieDetails={errorMovieDetails}
          />
        </Route>
      )}
      {!showByCondition && <SearchBlock />}
    </HeaderWrapper>
  );
};
