import Footer from 'components/footer/footer';
import { Modals } from 'components/modals';
import React from 'react';
import { AppRouter } from 'Router';
import { GlobalStyles } from 'styles/global-styles';
import { MainPageGrid } from 'styles/main-page-grid';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainPageGrid>
        <Modals />
        <AppRouter />
        <Footer />
      </MainPageGrid>
    </>
  );
};

export default App;
