import { useShowModal } from 'hooks';
import * as React from 'react';

export const ModalsContext = React.createContext(null);

const ModalsContextProvider = ({ children }) => {
  const [movieDetails, setMovieDetails] = React.useState(null);
  const [loadingMovieDetails, setLoadingMovieDetails] = React.useState(true);
  const [errorMovieDetails, setErrorMovieDetails] = React.useState(false);
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
