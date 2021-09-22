import { AddMovieForm } from 'components/add-movie-form';
import { Catalog } from 'components/catalog/catalog';
import Footer from 'components/footer/footer';
import { Header } from 'components/header';
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
        <Header />
        <Catalog />
        <Footer />
      </MainPageGrid>
    </ErrorBoundary>
  );
};

export default App;
