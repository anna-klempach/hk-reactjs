import * as React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import Footer from '../footer/footer';
import Header from '../header/header';
import Main from '../main/main';
import './app.scss';
import ErrorBoundary from '../error-boundary/error-boundary';
import { FilterFieldEnum, MoviesFilter, SortingDirectionEnum, SortingFieldsEnum } from '../../models/enums/movies-list';
import { Movie } from '../../models/movie';
import * as DataService from '../../services/data-service';
import SearchPanel from '../search-panel/search-panel';
import MoviesList from '../movies-list/movies-list';
import MovieInfoHeader from '../movie-info-header/movie-info-header';
import useFetch from '../../hooks/use-fetch';
import MovieDetails from '../movie-details/movie-details';
import StartPage from '../start-page/start-page';

const App: React.FunctionComponent<Record<string, unknown>> = () => {
  const [selectedMovieId, setSelectedMovieId] = React.useState(0);
  // TODO: Alert is not needed for now. Consider refactoring alert display when redux and API calls  implemented
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertText, setAlertText] = React.useState('');

  const handleMovieCardClick = (id: number): void => {
    setSelectedMovieId(id);
  };

  const handleClickSearch = (): void => {
    setSelectedMovieId(0);
  };

  const handleAlertClose = (): void => {
    setShowAlert(false);
  };

  return (
    <>
    {
      showAlert
      && <Alert onClose={() => handleAlertClose()}>
        <AlertTitle>componentDidUpdate worked!</AlertTitle>
        {alertText}
      </Alert>
    }
    {
      selectedMovieId !== 0
      ? <MovieDetails movieId={selectedMovieId} onClickSearch={handleClickSearch} onClickMovieCard={handleMovieCardClick} />
      : <StartPage onClickMovieCard={handleMovieCardClick} />
    }
    </>
  );
};

export default App;
