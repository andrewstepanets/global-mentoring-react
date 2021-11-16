import { Button } from 'components/button';
import { Input } from 'components/input';
import React, {
  FC,
  FormEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { encodeURL } from 'utils/utils';
import { InputSearchContainer, SearchTitle, SearchWrapper } from './styles';

export const SearchBlock: FC = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const encode = encodeURL(value);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleOnChange = useCallback(
    (event: FormEvent<HTMLInputElement>): void => {
      setValue(event.currentTarget.value);
    },
    [value],
  );

  const handleOnSearch = useCallback(() => {
    setValue('');
  }, [value]);

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
          <Link to={`/search/${encode}`}>
            <Button
              submit
              type="submit"
              onClick={handleOnSearch}
              text="Search"
            />
          </Link>
        </InputSearchContainer>
      </form>
    </SearchWrapper>
  );
};
