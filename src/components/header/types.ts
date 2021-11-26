import { IMovieDetails } from 'components/movies-list/posters/types';

export interface HeaderProps {
  loadingMovieDetails: boolean;
  errorMovieDetails: boolean;
  movieDetails: IMovieDetails;
  showAddModal: () => void;
  hideAdd: () => void;
}

export interface SearchHeaderProps {
  loadingMovieDetails: boolean;
  errorMovieDetails: boolean;
  movieDetails: IMovieDetails;
}
