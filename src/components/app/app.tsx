import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MovieDetails from '../movie-details/movie-details';
import SearchMoviesPage from '../search-movies-page/search-movies-page';
import { CustomAlert } from '../custom-alert/custom-alert';
import { CustomLoader } from '../custom-loader/custom-loader';
import { ErrorPage } from '../error-page/error-page';

const App: React.FunctionComponent<Record<string, unknown>> = () => 
  <>
    <CustomAlert />
    <CustomLoader />
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchMoviesPage />
        </Route>
        <Route path="/search">
          <SearchMoviesPage />
        </Route>
        <Route path="/film/:id">
          <MovieDetails />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  </>;

export default App;
