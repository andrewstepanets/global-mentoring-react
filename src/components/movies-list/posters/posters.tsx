import { API_PAGE } from '@constants';
import { Button } from 'components/button';
import usePostersFetch from 'hooks/usePostersFetch';
import React, { FC, memo, useCallback } from 'react';
import Loader from 'react-loader-spinner';
import shortid from 'shortid';
import { PosterItem } from './poster-item';
import {
  NumberMovies,
  PostersError,
  PostersList,
  PostersWrapper,
} from './styles';

interface PostersProps {
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
}

const Posters: FC<PostersProps> = ({ setMovieDetails }: any) => {
  const { movies, error, loading, fetchMovies }: any = usePostersFetch();

  const loadMorePosters = useCallback(() => {
    const loadMorePostersEndpoint = `${API_PAGE}${movies.currentPage + 1}`;

    fetchMovies(loadMorePostersEndpoint);
  }, []);

  const posters = movies.movies.map((poster) => {
    const genre = poster.genres.map((genre) => (
      <span key={shortid.generate()}> {genre}, </span>
    ));

    return (
      <PosterItem
        key={shortid.generate()}
        setMovieDetails={setMovieDetails}
        poster={poster}
        genre={genre}
      />
    );
  });

  return (
    <PostersWrapper>
      {error && <PostersError>No Movie Found</PostersError>}
      {loading && (
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      )}
      <>
        {' '}
        <NumberMovies>
          <span>{movies.movies.length}</span> movie found
        </NumberMovies>
        <PostersList>{posters}</PostersList>
      </>
      <Button
        load
        text="Load more posters"
        type="button"
        onClick={loadMorePosters}
      />
    </PostersWrapper>
  );
};

export default memo(Posters);
