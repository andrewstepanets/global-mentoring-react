import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useShowModal } from '../../hooks/useShowModal';
import { putPosterId } from '../../redux/actions';
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

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  hideEdit,
  hideDelete,
  posterId,
}) => {
  const dispatch = useDispatch();
  const { isShowing, toggle } = useShowModal();

  const handleOnDelete = React.useCallback(() => {
    hideDelete();
    dispatch(putPosterId(posterId));
  }, []);

  const handleOnEdit = React.useCallback(() => {
    hideEdit();
    dispatch(putPosterId(posterId));
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
