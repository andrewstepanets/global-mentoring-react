import React, { FC, SyntheticEvent, useCallback, useContext } from 'react';

import { Button } from 'components/button';
import { Logo } from 'components/logo';
import { HeaderWrapper } from './styles';
import { SearchBlock } from 'components/search-block';
import { ModalsContext } from 'modal-context';
import { useDispatch } from 'react-redux';
import { SHOW_MODAL_ADD } from 'redux/modals/modals.types';

export const AddHeader: FC = () => {
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <div className="header-top">
        <Logo />

        <Button
          button
          type="button"
          onClick={() => dispatch({ type: SHOW_MODAL_ADD })}
          text="+ Add Movie"
        />
      </div>
      <SearchBlock />
    </HeaderWrapper>
  );
};
