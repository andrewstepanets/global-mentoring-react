import {
  SHOW_MODAL_ADD,
  HIDE_MODAL_ADD,
  SHOW_MODAL_CONGRATULATIONS,
  HIDE_MODAL_CONGRATULATIONS,
  SHOW_MODAL_EDIT,
  HIDE_MODAL_EDIT,
  SHOW_MODAL_DELETE,
  HIDE_MODAL_DELETE,
} from './modals.types';

export interface ModalsState {
  isShowingAdd: boolean;
  isShowingCongratulations: boolean;
  isShowingEdit: boolean;
  isShowingDelete: boolean;
}

export const initialState: ModalsState = {
  isShowingAdd: false,
  isShowingCongratulations: false,
  isShowingEdit: false,
  isShowingDelete: false,
};

const modals = (state = initialState, { type }) => {
  switch (type) {
    case SHOW_MODAL_ADD:
      return {
        ...state,
        isShowingAdd: true,
      };
    case HIDE_MODAL_ADD:
      return {
        ...state,
        isShowingAdd: false,
      };
    case SHOW_MODAL_CONGRATULATIONS:
      return {
        ...state,
        isShowingAdd: true,
      };
    case HIDE_MODAL_CONGRATULATIONS:
      return {
        ...state,
        isShowingAdd: false,
      };
    case SHOW_MODAL_EDIT:
      return {
        ...state,
        isShowingEdit: true,
      };
    case HIDE_MODAL_EDIT:
      return {
        ...state,
        isShowingEdit: false,
      };
    case SHOW_MODAL_DELETE:
      return {
        ...state,
        isShowingDelete: true,
      };
    case HIDE_MODAL_DELETE:
      return {
        ...state,
        isShowingDelete: false,
      };
    default:
      return state;
  }
};

export default modals;
