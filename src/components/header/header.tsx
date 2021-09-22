import { Button as AddMovieButton } from 'components/button';
import { Logo } from 'components/logo';
import { SearchBlock } from 'components/search-block';
import React, { FC, SyntheticEvent } from 'react';
import { HeaderWrapper } from './styles';

export const Header: FC = () => {
  const handleOnClick = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('click');
  };

  return (
    <HeaderWrapper>
      <div className="header-top">
        <Logo />
        <AddMovieButton
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
