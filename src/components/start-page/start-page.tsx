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
import { addMovieThunk } from '../../redux/thunk';
import useRouter from '../../hooks/use-router';
import { MovieQueryParams } from '../../models/movie-query-params';
import { getMovies, setSearch } from '../../redux/actions';
import { selectMovieQueryParams } from '../../redux/selectors';

const StartPage = (props: any): React.ReactElement => {
  
  const handleSearchValueChange = (filter: string): void => {
    console.log('onsearchClickworked', filter)
    props.history.push({
      pathname: '/search',
      search: `?search=${filter}`
    });
  };

  const handleAddMovie = (movieRecord: Movie): Movie => movieRecord;

  return (
    <div className="app-container">
      <ErrorBoundary>
        <div className="app-container__inner">
          <Header>
            <SearchHeader onAddMovie={handleAddMovie}>
              <SearchPanel onSearchValueChange={handleSearchValueChange} initialValue="" />
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

export default StartPage;
