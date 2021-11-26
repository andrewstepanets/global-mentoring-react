import { API_BASE } from '@constants';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { IMovieDetails } from 'components/movies-list/posters/types';
import { ReleaseDatePicker } from 'components/release-date-picker';
import { Select } from 'components/select';
import { useFormik } from 'formik';
import { useApiRequest } from 'hooks/useApiRequest';
import moment from 'moment';
import React, { FC, useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { editMovie } from 'redux/movies/movies.actions';
import { MoviesState } from 'redux/movies/movies.reducer';
import { AppState } from 'redux/root-reducer';
import * as Yup from 'yup';
import {
  CloseButton,
  EditMovieButtonContainer,
  EditMovieFormContainer,
  EditMovieFormError,
  EditMovieFormInner,
  EditMovieFormTitle,
  EditMovieFormWrapper,
} from './styles';
interface EditMovieFormProps {
  hideEdit: () => void;
}

const initialValue = {
  id: '',
  title: '',
  release_date: '',
  poster_path: '',
  genres: [],
  overview: '',
  runtime: '',
};

const validationSchema = Yup.object({
  id: Yup.string().required('Required'),
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

export const EditMovieForm: FC<EditMovieFormProps> = ({ hideEdit }) => {
  const posterId = useSelector<AppState>(
    ({ movies: { posterId } }) => posterId,
  );
  const movie = useSelector<AppState>(({ movies: { items } }) =>
    items.find((movie) => movie.id === posterId),
  );
  const initialValues = { ...initialValue, ...(movie as IMovieDetails) };
  const { fetchData: fetchEditMovie } = useApiRequest(
    'put',
    API_BASE,
    editMovie,
  );

  useEffect(() => {
    const close = (event) => {
      if (event.keyCode === 27) {
        event.preventDefault();
        hideEdit();
      }
    };
    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  }, [hideEdit]);

  const onSubmit = (values) => {
    const body = {
      ...values,
      runtime: parseInt(values.runtime, 10),
      id: parseInt(values.id, 10),
    };
    fetchEditMovie(undefined, body);
    hideEdit();
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
    <EditMovieFormWrapper>
      <EditMovieFormContainer>
        <CloseButton onClick={hideEdit} />
        <EditMovieFormTitle>Edit Movie</EditMovieFormTitle>
        <EditMovieFormInner onSubmit={handleSubmit}>
          <div>
            <Input
              label="Movie id"
              name="id"
              type="text"
              onChange={handleChange}
              value={values.id}
              autoComplete="off"
              disabled
            />
            {
              <EditMovieFormError>
                {touched.id && errors.id ? errors.id : ''}
              </EditMovieFormError>
            }
          </div>
          <div>
            <Input
              label="Title"
              name="title"
              type="text"
              onChange={handleChange}
              value={values.title}
              autoComplete="off"
            />
            {
              <EditMovieFormError>
                {touched.title && errors.title ? errors.title : ''}
              </EditMovieFormError>
            }
          </div>
          <ReleaseDatePicker
            name="release_date"
            type="text"
            onChange={handleOnCalendar}
            value={values['release_date']}
            onKeyDown={(event) => event.preventDefault()}
          />
          <div>
            <Input
              label="Movie url"
              name="poster_path"
              type="text"
              onChange={handleChange}
              value={values['poster_path']}
              autoComplete="off"
            />
            {
              <EditMovieFormError>
                {touched['poster_path'] && errors['poster_path']
                  ? errors['poster_path']
                  : ''}
              </EditMovieFormError>
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
              <EditMovieFormError>
                {touched.genres && errors.genres ? errors.genres : ''}
              </EditMovieFormError>
            }
          </div>
          <div>
            <Input
              label="Runtime"
              name="runtime"
              type="text"
              onChange={handleChange}
              value={values.runtime}
              autoComplete="off"
            />
            {
              <EditMovieFormError>
                {touched.runtime && errors.runtime ? errors.runtime : ''}
              </EditMovieFormError>
            }
          </div>
          <div>
            <Input
              label="Overview"
              name="overview"
              type="text"
              onChange={handleChange}
              value={values.overview}
              autoComplete="off"
            />
            {
              <EditMovieFormError>
                {touched.overview && errors.overview ? errors.overview : ''}
              </EditMovieFormError>
            }
          </div>
        </EditMovieFormInner>
        <EditMovieButtonContainer>
          <Button reset type="reset" onClick={() => resetForm()} text="Reset" />
          <Button submit type="submit" onClick={handleSubmit} text="Save" />
        </EditMovieButtonContainer>
      </EditMovieFormContainer>
    </EditMovieFormWrapper>
  );
};
