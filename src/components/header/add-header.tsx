import React, { FC, SyntheticEvent, useCallback } from 'react';

import { Button } from 'components/button';
import { Logo } from 'components/logo';
import { HeaderWrapper } from './styles';
import { SearchBlock } from 'components/search-block';
import { AddHeaderProps } from './types';

export const AddHeader: FC<AddHeaderProps> = ({ hideAdd }) => {
  const handleOnClick = useCallback((event: SyntheticEvent): void => {
    hideAdd();
  }, []);

  return (
    <HeaderWrapper>
      <div className="header-top">
        <Logo />

        <Button
          button
          type="button"
          onClick={handleOnClick}
          text="+ Add Movie"
        />
      </div>
      <SearchBlock />
    </HeaderWrapper>
  );
};
