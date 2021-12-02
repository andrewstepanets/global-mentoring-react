import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import shortid from 'shortid';
import Loader from 'react-loader-spinner';
import { Home, NoMatch, SearchMovies } from 'pages';
import MovieDetails from 'pages/movie-details';

// const MovieDetails = lazy(() => import('pages/movie-details'));
// const SearchMovies = lazy(() =>
//   import('pages').then((module) => ({ default: module.SearchMovies })),
// );
// const NoMatch = lazy(() =>
//   import('pages').then((module) => ({ default: module.NoMatch })),
// );

// const routes = [
//   {
//     path: '/',
//     exact: true,
//     component: Home,
//   },
//   {
//     path: '/film/:id?',
//     component: MovieDetails,
//   },
//   {
//     path: '/search/:slug',
//     component: SearchMovies,
//   },
//   {
//     component: NoMatch,
//   },
// ];

export const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/film/:id">
        <MovieDetails />
      </Route>
      <Route path="/search/:slug">
        <SearchMovies />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};
