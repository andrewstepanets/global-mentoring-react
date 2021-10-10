import { Button } from 'components/button';
import { Input } from 'components/input';
import { ReleaseDatePicker } from 'components/release-date-picker';
import { Select } from 'components/select';
import React, { FC, FormEvent, useCallback, useState } from 'react';
import {
  AddMovieButtonContainer,
  AddMovieFormContainer,
  AddMovieFormInner,
  AddMovieFormTitle,
  AddMovieFormWrapper,
  CloseButton,
} from './styles';

interface AddMovieFormProps {
  hideAdd: () => void;
}

const initialValues = {
  genre: '',
  movie: '',
  overview: '',
  rating: '',
  runtime: '',
  title: '',
};

export const AddMovieForm: FC<AddMovieFormProps> = ({ hideAdd }) => {
  const [values, setValues] = useState(initialValues);

  const handleOnChange = useCallback(({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues({
      ...values,
      [target.name]: value,
    });
  }, []);

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(JSON.stringify(values, null, 2));
  }, []);

  return (
    <AddMovieFormWrapper>
      <AddMovieFormContainer>
        <CloseButton onClick={() => hideAdd()} />
        <AddMovieFormTitle>Add Movie</AddMovieFormTitle>
        <AddMovieFormInner onSubmit={handleSubmit}>
          <Input
            topic
            label="Title"
            name="title"
            type="text"
            placeholder="Moana"
            onChange={handleOnChange}
            value={values.title}
          />
          <ReleaseDatePicker />
          <Input
            movie
            label="Movie url"
            name="movie"
            type="text"
            placeholder="https://"
            onChange={handleOnChange}
            value={values.movie}
          />
          <Input
            rating
            label="Rating"
            name="rating"
            type="text"
            placeholder="7.8"
            onChange={handleOnChange}
            value={values.rating}
          />
          <Select onChange={handleOnChange} value={values.genre} name="genre" />
          <Input
            runtime
            label="Runtime"
            name="runtime"
            type="text"
            placeholder="minutes"
            onChange={handleOnChange}
            value={values.runtime}
          />
          <Input
            overview
            label="Overview"
            name="overview"
            type="text"
            placeholder="Overview here"
            onChange={handleOnChange}
            value={values.overview}
          />
        </AddMovieFormInner>
        <AddMovieButtonContainer>
          <Button reset type="reset" text="Reset" />
          <Button submit type="submit" onClick={handleSubmit} text="Submit" />
        </AddMovieButtonContainer>
      </AddMovieFormContainer>
    </AddMovieFormWrapper>
  );
};
