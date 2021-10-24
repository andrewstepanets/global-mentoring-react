import { addMovie } from 'api';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { ReleaseDatePicker } from 'components/release-date-picker';
import { Select } from 'components/select';
import moment from 'moment';
import React, { FC, FormEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
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
  title: '',
  release_date: '',
  poster_path: '',
  genres: [],
  overview: '',
  runtime: '',
  rating: '',
};

export const AddMovieForm: FC<AddMovieFormProps> = ({ hideAdd }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);

  const handleOnChange = useCallback(
    ({ target }) => {
      const value = target.type === 'checkbox' ? target.checked : target.value;

      setValues({
        ...values,
        [target.name]: value,
      });
    },
    [values],
  );

  const handleOnSelect = useCallback(
    (selected) => {
      setValues({
        ...values,
        genres: selected,
      });
    },
    [values],
  );

  const handleOnCalendar = useCallback(
    (data) => {
      const formattedDate = moment(data).format('YYYY-MM-DD');

      setValues({
        ...values,
        release_date: formattedDate,
      });
    },
    [values],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch(addMovie(values));
      hideAdd();
    },
    [values],
  );

  return (
    <AddMovieFormWrapper>
      <AddMovieFormContainer>
        <CloseButton onClick={() => hideAdd()} />
        <AddMovieFormTitle>Add Movie</AddMovieFormTitle>
        <AddMovieFormInner onSubmit={handleSubmit}>
          <Input
            label="Title"
            name="title"
            type="text"
            placeholder="Moana"
            onChange={handleOnChange}
            value={values.title}
            autoComplete="off"
          />
          <ReleaseDatePicker
            name="release_date"
            onChange={handleOnCalendar}
            value={values['release_date']}
          />
          <Input
            label="Movie url"
            name="poster_path"
            type="text"
            placeholder="Movie url here"
            onChange={handleOnChange}
            value={values['poster_path']}
            autoComplete="off"
          />
          <Input
            label="Rating"
            name="rating"
            type="text"
            placeholder="7.8"
            onChange={handleOnChange}
            value={values.rating}
            autoComplete="off"
          />
          <Select
            onChange={handleOnSelect}
            value={values.genres}
            name="genres"
            selected={values.genres}
          />
          <Input
            label="Runtime"
            name="runtime"
            type="text"
            placeholder="Runtime here"
            onChange={handleOnChange}
            value={values.runtime}
            autoComplete="off"
          />
          <Input
            label="Overview"
            name="overview"
            type="text"
            placeholder="Overview here"
            onChange={handleOnChange}
            value={values.overview}
            autoComplete="off"
          />
        </AddMovieFormInner>
        <AddMovieButtonContainer>
          <Button
            reset
            type="reset"
            onClick={() => setValues(initialValues)}
            text="Reset"
          />
          <Button submit type="submit" onClick={handleSubmit} text="Submit" />
        </AddMovieButtonContainer>
      </AddMovieFormContainer>
    </AddMovieFormWrapper>
  );
};
