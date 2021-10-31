import { AddMovieForm } from 'components/add-movie-form';
import { Congratulations } from 'components/congratulations';
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
  const [loadingMovieDetails, setLoadingMovieDetails]: any = useState(true);
  const [errorMovieDetails, setErrorMovieDetails]: any = useState(false);
  const { isShowing: isShowingAdd, toggle: toggleAdd } = useShowModal();
  const { isShowing: isShowingEdit, toggle: toggleEdit } = useShowModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useShowModal();
  const { isShowing: isShowingCongratulations, toggle: toggleCongratulations } =
    useShowModal();

  return (
    <ErrorBoundary>
      <GlobalStyles />
      <MainPageGrid>
        {isShowingAdd && (
          <AddMovieForm
            hideAdd={toggleAdd}
            hideCongratulations={toggleCongratulations}
          />
        )}
        {isShowingCongratulations && (
          <Congratulations hideCongratulations={toggleCongratulations} />
        )}
        {isShowingEdit && <EditMovieForm hideEdit={toggleEdit} />}
        {isShowingDelete && <DeleteMovieForm hideDelete={toggleDelete} />}
        <Header
          movieDetails={movieDetails}
          loadingMovieDetails={loadingMovieDetails}
          errorMovieDetails={errorMovieDetails}
          hide={toggleAdd}
        />
        <MoviesList
          setMovieDetails={setMovieDetails}
          setLoadingMovieDetails={setLoadingMovieDetails}
          setErrorMovieDetails={setErrorMovieDetails}
          hideEdit={toggleEdit}
          hideDelete={toggleDelete}
        />
        <Footer />
      </MainPageGrid>
    </ErrorBoundary>
  );
};

export default App;
