import { Movie, MovieQueryParams } from '../models/movie';
import { addMovie, deleteMovie, getMovie, getMovies, updateMovie } from '../services/data-service';
import { Action, setAlert, setLoading, setMovie, setMovies } from './actions';
import { AlertTypesEnum } from './reducers/alert';

type DispatchAsync = (dispatch: Dispatch) => Promise<void>;
type Dispatch = (arg: Action | DispatchAsync) => void;

export const getMovieThunk = (id: number) => async (dispatch: Dispatch): Promise<void> => {
  dispatch(setLoading(true));
  try {
    const movie = await getMovie(id);
    dispatch(setMovie(movie));
  }
  catch (error) {
    dispatch(setAlert({
      type: AlertTypesEnum.error,
      message: error
    }))
  }
  // This timeout has no practical sense, just removes the loader after view is refreshed
  setTimeout(() => dispatch(setLoading(false)), 1000);
};

export const addMovieThunk = (movieRecord: Movie) => async (dispatch: Dispatch): Promise<void> => {
  dispatch(setLoading(true));
  try {
    const movie = await addMovie(movieRecord);
    dispatch(setMovie(movie));
    dispatch(setAlert({
      type: AlertTypesEnum.success,
      message: `Successfully added movie ${movieRecord.title}`
    }));
  }
  catch (error) {
    dispatch(setAlert({
      type: AlertTypesEnum.error,
      message: error
    }))
  }
  setTimeout(() => dispatch(setLoading(false)), 1000);
};

export const getMoviesThunk = (queryParams: MovieQueryParams) => async (dispatch: Dispatch): Promise<void> => {
  dispatch(setLoading(true));
  try {
    const movies = await getMovies(queryParams);
    dispatch(setMovies(movies));
  }
  catch (error) {
    dispatch(setAlert({
      type: AlertTypesEnum.error,
      message: error
    }))
  }
  setTimeout(() => dispatch(setLoading(false)), 1000);
};

export const updateMovieThunk = (movieRecord: Movie, movieQueryParams: MovieQueryParams) => async (dispatch: Dispatch): Promise<void> => {
  if (!movieRecord) {
    return;
  }
  // Tagline is a required field, but in some movies it's not present
  // TODO: Add tagline field in movie form on edit
  if (!movieRecord.tagline) {
    movieRecord.tagline = 'Cool tagline';
  }
  dispatch(setLoading(true));
  try {
    const movie = await updateMovie(movieRecord);
    dispatch(setMovie(movie));
    dispatch(getMoviesThunk(movieQueryParams));
    dispatch(setAlert({
      type: AlertTypesEnum.success,
      message: `Successfully updated movie ${movieRecord.title}`
    }));
  }
  catch (error) {
    dispatch(setAlert({
      type: AlertTypesEnum.error,
      message: error
    }))
  }
  setTimeout(() => dispatch(setLoading(false)), 1000);
};

export const deleteMovieThunk = (id: number, movieQueryParams: MovieQueryParams) => async (dispatch: Dispatch): Promise<void> => {
  dispatch(setLoading(true));
  try {
    await deleteMovie(id);
    dispatch(getMoviesThunk(movieQueryParams));
    dispatch(setAlert({
      type: AlertTypesEnum.success,
      message: 'Successfully deleted movie'
    }));
  }
  catch (error) {
    dispatch(setAlert({
      type: AlertTypesEnum.error,
      message: error
    }))
  }
  setTimeout(() => dispatch(setLoading(false)), 1000);
};
