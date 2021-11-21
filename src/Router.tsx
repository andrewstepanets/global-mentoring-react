import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { Home } from 'pages';

const MovieDetails = lazy(() => import('pages/movie-details'));
const SearchMovies = lazy(() =>
  import('pages').then((module) => ({ default: module.SearchMovies })),
);
const NoMatch = lazy(() =>
  import('pages').then((module) => ({ default: module.NoMatch })),
);

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/film/:id',
    component: MovieDetails,
  },
  {
    path: '/search/:slug',
    component: SearchMovies,
  },
  {
    path: '*',
    component: NoMatch,
  },
];

export const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          <Suspense
            fallback={
              <Loader type="Circles" color="#00BFFF" height={80} width={80} />
            }
          >
            <route.component />
          </Suspense>
        </Route>
      ))}
    </Switch>
  );
};
