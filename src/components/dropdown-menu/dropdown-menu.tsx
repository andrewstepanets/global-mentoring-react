import { ModalsContext } from 'modal-context';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { SHOW_MODAL_DELETE, SHOW_MODAL_EDIT } from 'redux/modals/modals.types';
import { useShowModal } from '../../hooks/useShowModal';
import { putPosterId } from '../../redux/movies/movies.actions';
import {
  DropdownMenuButton,
  DropdownMenuContainer,
  DropdownMenuDots,
  DropdownMenuItem,
  DropdownMenuItems,
  DropdownMenuMoreMenu,
  DropdownMenuSpan,
} from './styles';

interface DropdownMenuProps {
  posterId: string | number;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ posterId }) => {
  const dispatch = useDispatch();
  const { isShowing, toggle } = useShowModal();

  const handleOnDelete = () => {
    dispatch({ type: SHOW_MODAL_DELETE });
    dispatch(putPosterId(posterId));
    toggle();
  };

  const handleOnEdit = () => {
    dispatch({ type: SHOW_MODAL_EDIT });
    dispatch(putPosterId(posterId));
    toggle();
  };

  return (
    <DropdownMenuContainer>
      <>
        <DropdownMenuDots onClick={toggle}>
          <DropdownMenuSpan />
          <DropdownMenuSpan />
          <DropdownMenuSpan />
        </DropdownMenuDots>
        {isShowing && (
          <DropdownMenuMoreMenu>
            <DropdownMenuItems>
              <DropdownMenuItem>
                <DropdownMenuButton type="button" onClick={handleOnEdit}>
                  Edit
                </DropdownMenuButton>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <DropdownMenuButton type="button" onClick={handleOnDelete}>
                  Delete
                </DropdownMenuButton>
              </DropdownMenuItem>
            </DropdownMenuItems>
          </DropdownMenuMoreMenu>
        )}
      </>
    </DropdownMenuContainer>
  );
};
