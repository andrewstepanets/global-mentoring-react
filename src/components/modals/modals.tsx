import { AddMovieForm } from 'components/add-movie-form';
import { Congratulations } from 'components/congratulations';
import { DeleteMovieForm } from 'components/delete-movie-form';
import { EditMovieForm } from 'components/edit-movie-form';
import { ModalsContext } from 'modal-context';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HIDE_MODAL_ADD,
  HIDE_MODAL_CONGRATULATIONS,
  HIDE_MODAL_DELETE,
  HIDE_MODAL_EDIT,
} from 'redux/modals/modals.types';
import { AppState } from 'redux/root-reducer';

export const Modals = () => {
  // const { isShowingDelete, toggleDelete, isShowingEdit, toggleEdit } =
  //   useContext(ModalsContext);

  const isShowingAdd = useSelector<AppState>(
    ({ modals: { isShowingAdd } }) => isShowingAdd,
  );
  const isShowingCongratulations = useSelector<AppState>(
    ({ modals: { isShowingCongratulations } }) => isShowingCongratulations,
  );
  const isShowingEdit = useSelector<AppState>(
    ({ modals: { isShowingEdit } }) => isShowingEdit,
  );
  const isShowingDelete = useSelector<AppState>(
    ({ modals: { isShowingDelete } }) => isShowingDelete,
  );

  const dispatch = useDispatch();

  return (
    <>
      {isShowingAdd && (
        <AddMovieForm
          hideAdd={() => dispatch({ type: HIDE_MODAL_ADD })}
          isShowingAdd={isShowingAdd as boolean}
          hideCongratulations={() =>
            dispatch({ type: HIDE_MODAL_CONGRATULATIONS })
          }
        />
      )}
      {isShowingCongratulations && (
        <Congratulations
          hideCongratulations={() =>
            dispatch({ type: HIDE_MODAL_CONGRATULATIONS })
          }
        />
      )}
      {isShowingEdit && (
        <EditMovieForm hideEdit={() => dispatch({ type: HIDE_MODAL_EDIT })} />
      )}
      {isShowingDelete && (
        <DeleteMovieForm
          hideDelete={() => dispatch({ type: HIDE_MODAL_DELETE })}
        />
      )}
    </>
  );
};
