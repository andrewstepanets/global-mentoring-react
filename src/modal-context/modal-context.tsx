import * as React from 'react';

export const ModalsContext = React.createContext(null);

const ModalsContextProvider = ({ children }) => {
  const [movieDetails, setMovieDetails] = React.useState(null);
  const [loadingMovieDetails, setLoadingMovieDetails] = React.useState(true);
  const [errorMovieDetails, setErrorMovieDetails] = React.useState(false);

  return (
    <ModalsContext.Provider
      value={{
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
