import { Button } from 'components/button';
import { Input } from 'components/input';
import React, { FC, FormEvent, useState } from 'react';
import {
  AddMovieButtonContainer,
  AddMovieFormContainer,
  AddMovieFormInner,
  AddMovieFormTitle,
  AddMovieFormWrapper,
  CloseButton,
} from './styles';

export const AddMovieForm: FC = () => {
  const [value, setValue] = useState('');

  const handleOnChange = (event: FormEvent<HTMLInputElement>): void => {
    console.log('input: ', event.currentTarget.value);

    setValue(event.currentTarget.value);
  };

  return (
    <AddMovieFormWrapper>
      <AddMovieFormContainer>
        <CloseButton />
        <AddMovieFormTitle>Add Movie</AddMovieFormTitle>
        <AddMovieFormInner>
          <Input
            topic
            label="Title"
            name="title"
            type="text"
            placeholder="Moana"
            onChange={handleOnChange}
            value={value}
          />
          <Input
            release
            label="Release date"
            name="release"
            type="text"
            placeholder="Select Date"
            onChange={handleOnChange}
            value={value}
          />
          <Input
            movie
            label="Movie url"
            name="movie"
            type="text"
            placeholder="Movie url here"
            onChange={handleOnChange}
            value={value}
          />
          <Input
            movie
            label="Rating"
            name="rating"
            type="text"
            placeholder="7.8"
            onChange={handleOnChange}
            value={value}
          />
          <Input
            genre
            label="Genre"
            name="genre"
            type="text"
            placeholder="Select Genre"
            onChange={handleOnChange}
            value={value}
          />
          <Input
            runtime
            label="Runtime"
            name="runtime"
            type="text"
            placeholder="Runtime here"
            onChange={handleOnChange}
            value={value}
          />
          <Input
            overview
            label="Overview"
            name="overview"
            type="text"
            placeholder="Overview here"
            onChange={handleOnChange}
            value={value}
          />
        </AddMovieFormInner>
        <AddMovieButtonContainer>
          <Button reset type="reset" onClick={null} text="Reset"></Button>
          <Button submit type="submit" onClick={null} text="Submit" />
        </AddMovieButtonContainer>
      </AddMovieFormContainer>
    </AddMovieFormWrapper>
  );
};
