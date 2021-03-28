import * as React from 'react';
import { useSelector } from 'react-redux';
import MovieDetails from '../movie-details/movie-details';
import StartPage from '../start-page/start-page';
import { selectMovie } from '../../redux/selectors';
import { CustomAlert } from '../custom-alert/custom-alert';
import { CustomLoader } from '../custom-loader/custom-loader';

const App: React.FunctionComponent<Record<string, unknown>> = () => {
  const selectedMovie = useSelector(selectMovie);

  return (
    <>
    <CustomAlert />
    <CustomLoader />
    {
      selectedMovie
      ? <MovieDetails />
      : <StartPage />
    }
    </>
  );
};

export default App;
