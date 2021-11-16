import { IMovieDetails } from 'components/movies-list/posters/types';

export interface HeaderProps {
  loadingMovieDetails: boolean;
  errorMovieDetails: boolean;
  movieDetails: IMovieDetails;
  hide: () => void;
}

export interface SearchHeaderProps {
  loadingMovieDetails: boolean;
  errorMovieDetails: boolean;
  movieDetails: IMovieDetails;
}
export interface AddHeaderProps {
  hideAdd: () => void;
}