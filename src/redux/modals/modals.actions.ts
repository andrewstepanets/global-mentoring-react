import {
  HIDE_MODAL_ADD,
  HIDE_MODAL_CONGRATULATIONS,
  HIDE_MODAL_DELETE,
  HIDE_MODAL_EDIT,
  SHOW_MODAL_ADD,
  SHOW_MODAL_CONGRATULATIONS,
  SHOW_MODAL_DELETE,
  SHOW_MODAL_EDIT,
} from './modals.types';

export const showModalAdd = () => {
  return { type: SHOW_MODAL_ADD };
};

export const hideModalAdd = () => {
  return { type: HIDE_MODAL_ADD };
};

export const showModalCongratulations = () => {
  return { type: SHOW_MODAL_CONGRATULATIONS };
};

export const hideModalCongratulations = () => {
  return { type: HIDE_MODAL_CONGRATULATIONS };
};

export const showModalEdit = () => {
  return { type: SHOW_MODAL_EDIT };
};

export const hideModalEdit = () => {
  return { type: HIDE_MODAL_EDIT };
};

export const showModalDelete = () => {
  return { type: SHOW_MODAL_DELETE };
};

export const hideModalDelete = () => {
  return { type: HIDE_MODAL_DELETE };
};
