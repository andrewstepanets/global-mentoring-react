import { Button } from 'components/button';
import { Input } from 'components/input';
import { ReleaseDatePicker } from 'components/release-date-picker';
import { Select } from 'components/select';
import React, { FC, FormEvent, useState } from 'react';
import {
  CloseButton,
  EditMovieButtonContainer,
  EditMovieFormContainer,
  EditMovieFormInner,
  EditMovieFormTitle,
  EditMovieFormWrapper,
} from './styles';

interface EditMovieFormProps {
  hideEdit: () => void;
}

const initialValues = {
  genre: '',
  movie: '',
  overview: '',
  rating: '',
  runtime: '',
  title: '',
};

export const EditMovieForm: FC<EditMovieFormProps> = ({ hideEdit }) => {
  const [values, setValues] = useState(initialValues);

  const handleOnChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setValues({
      ...values,
      [target.name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <EditMovieFormWrapper>
      <EditMovieFormContainer>
        <CloseButton onClick={() => hideEdit()} />
        <EditMovieFormTitle>Edit Movie</EditMovieFormTitle>
        <EditMovieFormInner onSubmit={handleSubmit}>
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
            placeholder="https://www.moana.com"
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
        </EditMovieFormInner>
        <EditMovieButtonContainer>
          <Button reset type="reset" text="Reset" />
          <Button submit type="submit" onClick={handleSubmit} text="Submit" />
        </EditMovieButtonContainer>
      </EditMovieFormContainer>
    </EditMovieFormWrapper>
  );
};
