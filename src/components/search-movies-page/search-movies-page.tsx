import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../footer/footer';
import Header from '../header/header';
import SearchHeader from '../search-header/search-header';
import Main from '../main/main';
import ErrorBoundary from '../error-boundary/error-boundary';
import { Movie } from '../../models/movie';
import SearchPanel from '../search-panel/search-panel';
import MoviesList from '../movies-list/movies-list';
import FilterBar from '../filter-bar/filter-bar';
import { addMovieThunk, getMoviesThunk } from '../../redux/thunk';
import useRouter from '../../hooks/use-router';
import { MovieQueryParams, MovieQueryParamsDict } from '../../models/movie-query-params';
import { setQueryParams, setSearch } from '../../redux/actions';
import { selectMovieQueryParams } from '../../redux/selectors';

const SearchMoviesPage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = router.query as unknown as MovieQueryParams;
  const searchParam = params.search;
  const movieQueryParams = useSelector(selectMovieQueryParams);
  const [initialLoad, setInitialLoad] = React.useState(true);

  React.useEffect(() => {
    const queryParams = new MovieQueryParamsDict(params);
    dispatch(setQueryParams(queryParams));
    if (Object.keys(params).length > 0) {
      dispatch(getMoviesThunk(queryParams));
    }
  }, [params]);

  React.useEffect(() => {
    if (movieQueryParams && Object.keys(movieQueryParams).length > 0) {
      if (initialLoad) {
        setInitialLoad(false);
      } else {
        dispatch(getMoviesThunk(movieQueryParams));
      }
    }
  }, [movieQueryParams]);
  
  const handleSearchValueChange = (filter: string): void => {
    dispatch(setSearch(filter));
    router.history.push({
      pathname: '/search',
      search: `?search=${filter}`
    });
  };

  const handleAddMovie = (movieRecord: Movie): void => {
    dispatch(addMovieThunk(movieRecord));
  };

  return (
    <div className="app-container">
      <ErrorBoundary>
        <div className="app-container__inner">
          <Header>
            <SearchHeader onAddMovie={handleAddMovie}>
              <SearchPanel onSearchValueChange={handleSearchValueChange} initialValue={searchParam || ''} />
            </SearchHeader>
          </Header>
          <Main>
            <FilterBar />
            <MoviesList />
          </Main>
        </div>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default SearchMoviesPage;
