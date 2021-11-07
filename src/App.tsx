import Footer from 'components/footer/footer';
import { Header } from 'components/header';
import { Modals } from 'components/modals';
import { MoviesList } from 'components/movies-list';
import { ErrorBoundary } from 'error-boundary';
import { useShowModal } from 'hooks';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'Router';
import { GlobalStyles } from 'styles/global-styles';
import { MainPageGrid } from 'styles/main-page-grid';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <GlobalStyles />
        <MainPageGrid>
          <Modals />
          <AppRouter />
          <Footer />
        </MainPageGrid>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
