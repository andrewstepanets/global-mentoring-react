import { combineReducers } from 'redux';
import modals, { ModalsState } from './modals/modals.reducer';
import movies, { MoviesState } from './movies/movies.reducer';

export interface AppState {
  movies: MoviesState;
  modals: ModalsState;
}

const rootReducer = combineReducers({
  movies,
  modals,
});

export default rootReducer;
