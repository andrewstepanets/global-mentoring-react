export interface IMovieDetails {
  id: number;
  budget: number;
  genres: string[];
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface PostersProps {
  setLoadingMovieDetails: boolean;
  setErrorMovieDetails: boolean;
  setMovieDetails: IMovieDetails;
}

export interface PosterItemProps extends PostersProps {
  poster: IMovieDetails;
  genre: JSX.Element[] | string[];
}
