import React from 'react';
import { Switch, Route } from 'react-router';
import { Home, NoMatch, SearchMovies } from 'pages';
import MovieDetails from 'pages/movie-details';

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
