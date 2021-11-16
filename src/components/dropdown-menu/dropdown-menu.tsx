import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useShowModal } from '../../hooks/useShowModal';
import { deleteMovieId } from '../../redux/actions';
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
  hideEdit: () => void;
  hideDelete: () => void;
  posterId: string | number;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({
  hideEdit,
  hideDelete,
  posterId,
}) => {
  const dispatch = useDispatch();
  const { isShowing, toggle } = useShowModal();

  const handleOnDelete = useCallback(() => {
    hideDelete();
    dispatch(deleteMovieId(posterId));
  }, []);

  const handleOnEdit = useCallback(() => {
    hideEdit();
    dispatch(deleteMovieId(posterId));
  }, []);

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
