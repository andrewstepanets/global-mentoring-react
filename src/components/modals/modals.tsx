import { AddMovieForm } from 'components/add-movie-form';
import { Congratulations } from 'components/congratulations';
import { DeleteMovieForm } from 'components/delete-movie-form';
import { EditMovieForm } from 'components/edit-movie-form';
import { ModalsContext } from 'modal-context';
import React, { useContext } from 'react';

export const Modals = () => {
  const {
    isShowingDelete,
    toggleDelete,
    isShowingEdit,
    toggleEdit,
    isShowingAdd,
    toggleAdd,
    toggleCongratulations,
    isShowingCongratulations,
  } = useContext(ModalsContext);
  return (
    <>
      {isShowingAdd && (
        <AddMovieForm
          hideAdd={toggleAdd}
          isShowingAdd={isShowingAdd}
          hideCongratulations={toggleCongratulations}
        />
      )}
      {isShowingCongratulations && (
        <Congratulations hideCongratulations={toggleCongratulations} />
      )}
      {isShowingEdit && <EditMovieForm hideEdit={toggleEdit} />}
      {isShowingDelete && <DeleteMovieForm hideDelete={toggleDelete} />}
    </>
  );
};
