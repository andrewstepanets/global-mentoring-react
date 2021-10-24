import { editMovie } from 'api';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { ReleaseDatePicker } from 'components/release-date-picker';
import { Select } from 'components/select';
import moment from 'moment';
import React, { FC, FormEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  id: '',
  title: '',
  release_date: '',
  poster_path: '',
  genres: [],
  overview: '',
  runtime: '',
  rating: '',
};

export const EditMovieForm: FC<EditMovieFormProps> = ({ hideEdit }) => {
  const posterId = useSelector(({ movies: { posterId } }) => posterId);
  const movie = useSelector(({ movies: { items } }) =>
    items.find((movie) => movie.id === posterId),
  );
  const dispatch = useDispatch();
  const [values, setValues] = useState({ ...initialValues, ...movie });

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

      dispatch(editMovie(values));
      hideEdit();
    },
    [values],
  );

  return (
    <EditMovieFormWrapper>
      <EditMovieFormContainer>
        <CloseButton onClick={hideEdit} />
        <EditMovieFormTitle>Edit Movie</EditMovieFormTitle>
        <EditMovieFormInner onSubmit={handleSubmit}>
          <Input
            label="Movie id"
            name="id"
            type="text"
            placeholder="313369"
            onChange={handleOnChange}
            value={values.id}
            autoComplete="off"
          />
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
            placeholder="www.moana.com"
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
            name="genres"
            onChange={handleOnSelect}
            value={values.genres}
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
        </EditMovieFormInner>
        <EditMovieButtonContainer>
          <Button
            reset
            type="reset"
            onClick={() => setValues(initialValues)}
            text="Reset"
          />
          <Button submit type="submit" onClick={handleSubmit} text="Save" />
        </EditMovieButtonContainer>
      </EditMovieFormContainer>
    </EditMovieFormWrapper>
  );
};
