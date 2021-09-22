import { Button as SubmitButton } from 'components/button';
import { Input } from 'components/input';
import React, { FC, FormEvent, SyntheticEvent, useState } from 'react';
import { InputWrapper, SearchWrapper } from './styles';

export const SearchBlock: FC = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (event: FormEvent<HTMLInputElement>): void => {
    console.log('input: ', event.currentTarget.value);

    setValue(event.currentTarget.value);
  };

  return (
    <SearchWrapper>
      <h2>Find your movie</h2>
      <form onSubmit={(event: SyntheticEvent) => event.preventDefault()}>
        <InputWrapper>
          <Input
            search
            label={null}
            name="search"
            type="text"
            placeholder="What do you want to watch?"
            onChange={handleOnChange}
            value={value}
          />
          <SubmitButton
            submit
            type="submit"
            onClick={() => console.log('Searching......')}
            text="Search"
          />
        </InputWrapper>
      </form>
    </SearchWrapper>
  );
};
