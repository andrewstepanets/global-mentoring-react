import { Button } from 'components/button';
import { Input } from 'components/input';
import React, {
  FC,
  FormEvent,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';
import { InputSearchContainer, SearchTitle, SearchWrapper } from './styles';

export const SearchBlock: FC = () => {
  const [value, setValue] = useState('');

  const handleOnChange = useCallback(
    (event: FormEvent<HTMLInputElement>): void => {
      console.log('input: ', event.currentTarget.value);

      setValue(event.currentTarget.value);
    },
    [],
  );

  const handleSubmit = (event: FormEvent<HTMLInputElement>): void => {
    console.log('Searching......');
  };

  return (
    <SearchWrapper>
      <SearchTitle>Find your movie</SearchTitle>
      <form onSubmit={(event: SyntheticEvent) => event.preventDefault()}>
        <InputSearchContainer>
          <Input
            search
            label={null}
            name="search"
            type="text"
            placeholder="What do you want to watch?"
            onChange={handleOnChange}
            value={value}
          />
          <Button submit type="submit" onClick={handleSubmit} text="Search" />
        </InputSearchContainer>
      </form>
    </SearchWrapper>
  );
};
