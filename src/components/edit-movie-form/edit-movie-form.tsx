import { API_BASE } from '@constants';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { ReleaseDatePicker } from 'components/release-date-picker';
import { Select } from 'components/select';
import { useFormik } from 'formik';
import { useApiRequest } from 'hooks/useApiRequest';
import moment from 'moment';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { editMovie } from 'redux/actions';
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
  const posterId = useSelector(({ movies: { posterId } }) => posterId);
  const movie = useSelector(({ movies: { items } }) =>
    items.find((movie) => movie.id === posterId),
  );
  const initialValues = { ...initialValue, ...movie };
  const { fetchData: fetchEditMovie } = useApiRequest(
    'put',
    API_BASE,
    editMovie,
  );

  const onSubmit = (values) => {
    const body = {
      ...values,
      runtime: parseInt(values.runtime),
      id: parseInt(values.id),
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
