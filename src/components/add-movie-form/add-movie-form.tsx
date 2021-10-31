import { API_BASE } from '@constants';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { ReleaseDatePicker } from 'components/release-date-picker';
import { Select } from 'components/select';
import { useFormik } from 'formik';
import { useApiRequest } from 'hooks/useApiRequest';
import moment from 'moment';
import React, { FC } from 'react';
import { addMovie } from 'redux/actions';
import * as Yup from 'yup';
import {
  AddMovieButtonContainer,
  AddMovieFormContainer,
  AddMovieFormError,
  AddMovieFormInner,
  AddMovieFormTitle,
  AddMovieFormWrapper,
  CloseButton,
} from './styles';

interface AddMovieFormProps {
  hideAdd: () => void;
  hideCongratulations: any;
}

const initialValues = {
  title: '',
  release_date: '',
  poster_path:
    'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
  genres: [],
  overview: '',
  runtime: '',
};

const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  poster_path: Yup.string()
    .required('Required')
    .url('The "Movie url" field is not a valid URL.'),
  overview: Yup.string().required('Required'),
  runtime: Yup.number()
    .required('Required')
    .typeError('The "Runtime" field must be a Number.')
    .positive('The "Runtime" field must be a Positive Number.'),
  genres: Yup.array().min(1, 'The "Genres" field must have at least 1 items'),
});

export const AddMovieForm: FC<AddMovieFormProps> = ({
  hideAdd,
  hideCongratulations,
}) => {
  const { fetchData: fetchAddMovie } = useApiRequest(
    'post',
    API_BASE,
    addMovie,
  );

  const onSubmit = (values) => {
    const body = { ...values, runtime: parseInt(values.runtime) };
    fetchAddMovie(undefined, body);
    hideAdd();
    hideCongratulations();
  };

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleOnSelect = (selected) => {
    setFieldValue('genres', selected);
  };

  const handleOnCalendar = (data) => {
    const formattedDate = moment(data).format('YYYY-MM-DD');
    setFieldValue('release_date', formattedDate);
  };

  return (
    <AddMovieFormWrapper>
      <AddMovieFormContainer>
        <CloseButton onClick={() => hideAdd()} />
        <AddMovieFormTitle>Add Movie</AddMovieFormTitle>
        <AddMovieFormInner onSubmit={handleSubmit}>
          <div>
            <Input
              label="Title"
              name="title"
              type="text"
              placeholder="Moana"
              onChange={handleChange}
              value={values.title}
              autoComplete="off"
            />
            {
              <AddMovieFormError>
                {touched.title && errors.title ? errors.title : ''}
              </AddMovieFormError>
            }
          </div>
          <ReleaseDatePicker
            name="release_date"
            type="text"
            value={values['release_date']}
            onChange={handleOnCalendar}
          />
          <div>
            <Input
              label="Movie url"
              name="poster_path"
              type="text"
              placeholder="Movie url here"
              onChange={handleChange}
              value={values['poster_path']}
              autoComplete="off"
            />
            {
              <AddMovieFormError>
                {touched['poster_path'] && errors['poster_path']
                  ? errors['poster_path']
                  : ''}
              </AddMovieFormError>
            }
          </div>
          <div>
            <Select
              name="genres"
              onChange={handleOnSelect}
              value={values.genres}
              selected={values.genres}
            />
            {
              <AddMovieFormError>
                {touched.genres && errors.genres ? errors.genres : ''}
              </AddMovieFormError>
            }
          </div>
          <div>
            <Input
              label="Runtime"
              name="runtime"
              type="text"
              placeholder="Runtime here"
              onChange={handleChange}
              value={values.runtime}
              autoComplete="off"
            />
            {
              <AddMovieFormError>
                {touched.runtime && errors.runtime ? errors.runtime : ''}
              </AddMovieFormError>
            }
          </div>
          <div>
            <Input
              label="Overview"
              name="overview"
              type="text"
              placeholder="Overview here"
              onChange={handleChange}
              value={values.overview}
              autoComplete="off"
            />
            {
              <AddMovieFormError>
                {touched.overview && errors.overview ? errors.overview : ''}
              </AddMovieFormError>
            }
          </div>
        </AddMovieFormInner>
        <AddMovieButtonContainer>
          <Button reset type="reset" onClick={() => resetForm()} text="Reset" />
          <Button submit type="submit" onClick={handleSubmit} text="Submit" />
        </AddMovieButtonContainer>
      </AddMovieFormContainer>
    </AddMovieFormWrapper>
  );
};
