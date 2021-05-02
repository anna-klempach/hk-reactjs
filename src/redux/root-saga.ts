import { TakeableChannel } from 'redux-saga';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Movie } from '../models/movie';
import { MovieQueryParamsDict } from '../models/movie-query-params';
import { getMovies } from '../services/data-service';
import { Action, setAlert, setLoading, setMovies } from './actions';
import { AlertTypesEnum } from './reducers/alert';

export function* getMoviesSaga({payload:{queryParams}}: Action): Generator {
  yield put(setLoading(true));
  try {
    const movies: unknown = yield call(getMovies, queryParams);
    yield put(setMovies(movies as Movie[]));
  }
  catch (error) {
    yield put(setAlert({
      type: AlertTypesEnum.error,
      message: error.toString()
    }))
  }
  yield put(setLoading(false));
};

export function* watchGetMovies(): Generator {
  yield takeLatest('GET_MOVIES' as unknown as TakeableChannel<unknown>, getMoviesSaga);
}

export function* moviesSaga(): Generator {
  yield all([
    watchGetMovies(),
  ]);
}

export function* rootSaga(): Generator {
  yield all([
    moviesSaga(),
  ]);
}



