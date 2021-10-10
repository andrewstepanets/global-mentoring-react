import { AddMovieForm } from 'components/add-movie-form';
import { DeleteMovieForm } from 'components/delete-movie-form';
import { EditMovieForm } from 'components/edit-movie-form';
import Footer from 'components/footer/footer';
import { Header } from 'components/header';
import { MoviesList } from 'components/movies-list';
import { ErrorBoundary } from 'error-boundary';
import { useShowModal } from 'hooks';
import React, { useState } from 'react';
import { GlobalStyles } from 'styles/global-styles';
import { MainPageGrid } from 'styles/main-page-grid';

const App = () => {
  const [movieDetails, setMovieDetails]: any = useState(null);
  const { isShowing: isShowingAdd, toggle: toggleAdd } = useShowModal();
  const { isShowing: isShowingEdit, toggle: toggleEdit } = useShowModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useShowModal();

  return (
    <ErrorBoundary>
      <GlobalStyles />
      <MainPageGrid>
        {isShowingAdd && <AddMovieForm hideAdd={toggleAdd} />}
        {isShowingEdit && <EditMovieForm hideEdit={toggleEdit} />}
        {isShowingDelete && <DeleteMovieForm hideDelete={toggleDelete} />}
        <Header hide={toggleAdd} movieDetails={movieDetails} />
        <MoviesList setMovieDetails={setMovieDetails} />
        <Footer />
      </MainPageGrid>
    </ErrorBoundary>
  );
};

export default App;
