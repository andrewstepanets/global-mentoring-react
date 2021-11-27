import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import movies from '../redux/movies/movies.reducer';
import { AddMovieForm } from '../components/add-movie-form';
import { Router } from 'react-router-dom';

const renderWithRedux = (
  component,
  { initialState = {}, store = createStore(movies, initialState) } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('<AddMovieForm />', () => {
  beforeEach(() => {
    renderWithRedux(
      <AddMovieForm
        hideAdd={jest.fn()}
        hideCongratulations={() => {}}
        isShowingAdd={true}
      />,
    );
  });

  it('to be in the document', () => {
    const { container } = renderWithRedux(
      <AddMovieForm
        hideAdd={() => {}}
        hideCongratulations={() => {}}
        isShowingAdd={true}
      />,
    );

    expect(container).toBeInTheDocument();
  });

  it('Input "Title" to be in the document', () => {
    expect(screen.queryByPlaceholderText('Moana')).toBeInTheDocument();
  });

  it('Input "Title" get typing value', () => {
    const title = 'New Title';

    userEvent.type(screen.queryByPlaceholderText('Moana'), title);
    expect(screen.queryByPlaceholderText('Moana')).toHaveValue(title);
  });

  it('Element "Release Date" to be in the document', () => {
    expect(screen.getByLabelText('release')).toBeInTheDocument();
  });

  it('Input "Movie url" has initial value', () => {
    expect(screen.queryByPlaceholderText('Movie url here')).toHaveValue(
      'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
    );
  });

  it('Input "Overview" get typing value', () => {
    const overview =
      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.';

    userEvent.type(screen.queryByPlaceholderText('Overview here'), overview);
    expect(screen.queryByPlaceholderText('Overview here')).toHaveValue(
      overview,
    );
  });

  it('Input "Runtime" get typing value', () => {
    const runtime = '140';

    userEvent.type(screen.queryByPlaceholderText('Runtime here'), runtime);
    expect(screen.queryByPlaceholderText('Runtime here')).toHaveValue(runtime);
  });

  it('Element "Genres" to be in the document', () => {
    expect(screen.queryByPlaceholderText('Select Genre')).toBeInTheDocument();
  });

  it('Input "Genres" get typing value', () => {
    const genres = 'Comedy, Documentary';

    userEvent.type(screen.queryByPlaceholderText('Select Genre'), genres);
    expect(screen.queryByPlaceholderText('Select Genre')).toHaveValue(genres);
  });
});
