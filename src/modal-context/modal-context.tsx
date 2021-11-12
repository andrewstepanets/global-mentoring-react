import { useShowModal } from 'hooks';
import React, { createContext, useState } from 'react';

export const ModalsContext = createContext(undefined);

const ModalsContextProvider = ({ children }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loadingMovieDetails, setLoadingMovieDetails] = useState(true);
  const [errorMovieDetails, setErrorMovieDetails] = useState(false);
  const { isShowing: isShowingAdd, toggle: toggleAdd } = useShowModal();
  const { isShowing: isShowingEdit, toggle: toggleEdit } = useShowModal();
  const { isShowing: isShowingDelete, toggle: toggleDelete } = useShowModal();
  const { isShowing: isShowingCongratulations, toggle: toggleCongratulations } =
    useShowModal();

  return (
    <ModalsContext.Provider
      value={{
        isShowingAdd,
        toggleAdd,
        isShowingEdit,
        toggleEdit,
        isShowingDelete,
        toggleDelete,
        isShowingCongratulations,
        toggleCongratulations,
        movieDetails,
        setMovieDetails,
        setLoadingMovieDetails,
        setErrorMovieDetails,
        loadingMovieDetails,
        errorMovieDetails,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsContextProvider;
