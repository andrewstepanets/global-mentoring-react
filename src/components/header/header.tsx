import { Button } from 'components/button';
import { Logo } from 'components/logo';
import { MovieDetails } from 'components/movie-details';
import { SearchBlock } from 'components/search-block';
import React, { FC, SyntheticEvent } from 'react';
import { HeaderWrapper } from './styles';
interface HeaderProps {
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
  hide: () => void;
}

export const Header: FC<HeaderProps> = ({ hide, movieDetails }) => {
  const handleOnClick = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('click');
  };

  return (
    <HeaderWrapper>
      <div className="header-top">
        <Logo />
        {movieDetails && (
          <Button
            magnifier
            type="button"
            onClick={handleOnClick}
            text="&#x2315;"
          />
        )}
        {!movieDetails && (
          <Button button type="button" onClick={hide} text="+ Add Movie" />
        )}
      </div>
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      {!movieDetails && <SearchBlock />}
    </HeaderWrapper>
  );
};
