import { AddMovieForm } from 'components/add-movie-form';
import { DeleteMovieForm } from 'components/delete-movie-form';
import { EditMovieForm } from 'components/edit-movie-form';
import Footer from 'components/footer/footer';
import { Header } from 'components/header';
import { MoviesList } from 'components/movies-list/movies-list';
import { ErrorBoundary } from 'error-boundary';
import React from 'react';
import { GlobalStyles } from 'styles/global-styles';
import { MainPageGrid } from 'styles/main-page-grid';

const App = () => {
  return (
    <ErrorBoundary>
      <GlobalStyles />
      <MainPageGrid>
        <AddMovieForm />
        <EditMovieForm />
        <DeleteMovieForm />
        <Header />
        <MoviesList />
        <Footer />
      </MainPageGrid>
    </ErrorBoundary>
  );
};

export default App;
