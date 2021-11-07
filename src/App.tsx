import Footer from 'components/footer/footer';
import { Header } from 'components/header';
import { Modals } from 'components/modals';
import { MoviesList } from 'components/movies-list';
import { ErrorBoundary } from 'error-boundary';
import { useShowModal } from 'hooks';
import ModalsContextProvider from 'modal-context/modal-context';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'Router';
import { GlobalStyles } from 'styles/global-styles';
import { MainPageGrid } from 'styles/main-page-grid';

const App = () => {
  return (
    <ErrorBoundary>
      <ModalsContextProvider>
        <BrowserRouter>
          <GlobalStyles />
          <MainPageGrid>
            <Modals />
            <AppRouter />
            <Footer />
          </MainPageGrid>
        </BrowserRouter>
      </ModalsContextProvider>
    </ErrorBoundary>
  );
};

export default App;
