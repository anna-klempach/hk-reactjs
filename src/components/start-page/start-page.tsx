import * as React from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../footer/footer';
import Header from '../header/header';
import SearchHeader from '../search-header/search-header';
import Main from '../main/main';
import ErrorBoundary from '../error-boundary/error-boundary';
import { SortingDirectionEnum, SortingFieldsEnum } from '../../models/enums/movies-list';
import { Movie, MovieQueryParams } from '../../models/movie';
import SearchPanel from '../search-panel/search-panel';
import MoviesList from '../movies-list/movies-list';
import FilterBar from '../filter-bar/filter-bar';
import { addMovieThunk } from '../../redux/thunk';

const StartPage = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [movieQueryParams, setMovieQueryParams] = React.useState<MovieQueryParams>({
    sortBy: SortingFieldsEnum.rating,
    sortOrder: SortingDirectionEnum.desc,
    search: '',
    searchBy: '',
    filter: '',
    offset: '',
    limit: '24'
  });

  const handleSearchValueChange = (filter: string): void => {
    setMovieQueryParams(prev => ({
      ...prev,
      search: filter,
      searchBy: 'title'
    }));
  };

  const handleFilterChange = (filter: MovieQueryParams) => {
    setMovieQueryParams(prev => ({
      ...prev,
      sortBy: filter.sortBy,
      sortOrder: filter.sortOrder,
      searchBy: filter.searchBy,
      filter: filter.filter
    }));
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
              <SearchPanel onSearchValueChange={handleSearchValueChange} />
            </SearchHeader>
          </Header>
          <Main>
            <FilterBar filter={movieQueryParams} onFilterChange={handleFilterChange} />
            <MoviesList movieQueryParams={movieQueryParams} />
          </Main>
        </div>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

export default StartPage;
