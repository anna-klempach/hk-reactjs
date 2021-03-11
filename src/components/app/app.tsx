import * as React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import Footer from '../footer/footer';
import Header from '../header/header';
import SearchHeader from '../search-header/search-header';
import Main from '../main/main';
import './app.scss';
import ErrorBoundary from '../error-boundary/error-boundary';
import { FilterFieldEnum, MoviesFilter, SortingDirectionEnum, SortingFieldsEnum } from '../../models/enums/movies-list';
import { Movie } from '../../models/movie';
import * as DataService from '../../services/data-service';
import SearchPanel from '../search-panel/search-panel';
import MoviesList from '../movies-list/movies-list';
import MovieInfoHeader from '../movie-info-header/movie-info-header';

export interface AppState {
  filter: MoviesFilter,
  movies: Movie[],
  selectedMovie: Movie,
  displaySelectedMovie: boolean,
  showAlert: boolean,
  alertText: string
}

class App extends React.Component<Record<string, unknown>, AppState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      filter: {
        filterField: FilterFieldEnum.all,
        searchValue: '',
        sortingDirection: SortingDirectionEnum.asc,
        sortField: SortingFieldsEnum.releaseDate
      },
      movies: [],
      selectedMovie: null,
      displaySelectedMovie: false,
      showAlert: false,
      alertText: ''
    }
  }

  componentDidMount(): void {
    this.setState({
      movies: DataService.filterMovies(this.state.filter)
    });
  }

  showAlert = (): void => {
    this.setState({
      showAlert: true
    });
  }
  
  // The following lifecysle hooks are for the sake of the task 4 only
  // TODO: Remove them as soon as task 4 is complete
  // I like the alert though, let's keep it
  getSnapshotBeforeUpdate(prevProps: undefined, prevState: AppState): MoviesFilter {
    return prevState.filter;
  }

  componentDidUpdate(prevProps: undefined, prevState: AppState, snapshot: MoviesFilter): void {
    const alertText = `Previous State: ${JSON.stringify(prevState.filter)};
    SnapShot: ${JSON.stringify(snapshot)}`; 
    if (!this.state.showAlert && !prevState.showAlert) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        showAlert: true,
        alertText
      });
    } else if (this.state.alertText !== alertText){
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        alertText
      });
    }
  }

  shouldComponentUpdate(prevProps: undefined, prevState: AppState): boolean {
    // eslint-disable-next-line no-console
    console.log('shouldComponentUpdate worked');
    return true;
  }

  handleFilterChange = (filter: MoviesFilter | string): void => {
    if (typeof filter === 'string' || !filter) {
      this.setState({
        filter: {
          ...this.state.filter,
          searchValue: filter as string || ''
        }
      }, this.updateMovies);
      return;
    }

    this.setState({
      filter: {
        ...filter
      }
    }, this.updateMovies);
  }

  updateMovies = (): void => {
    this.setState({
      movies: DataService.filterMovies(this.state.filter)
    })
  }

  handleMovieCardClick = (id: number): void => {
    if (!id) {
      return;
    }
    this.setState({
      selectedMovie: DataService.getMovieCardById(id),
      displaySelectedMovie: true
    }, () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }));
  }

  handleAddMovie = (movieRecord: Movie): void => {
    if (!movieRecord) {
      return;
    }
    DataService.addMovie(movieRecord);
    this.updateMovies();
  }

  handleSearchBtnClick = (): void => {
    this.setState({
      selectedMovie: null,
      displaySelectedMovie: false
    });
  }

  handleAlertClose = (): void => {
    this.setState({
      showAlert: false
    });
  }

  render(): React.ReactElement {
    return (
      <div className="app-container">
        {
          this.state.showAlert
          && <Alert onClose={this.handleAlertClose}>
            <AlertTitle>componentDidUpdate worked!</AlertTitle>
            {this.state.alertText}
          </Alert>
        }
        <ErrorBoundary>
          <div className="app-container__inner">
            <Header>
              {
                this.state.displaySelectedMovie
                  ? <MovieInfoHeader movie={this.state.selectedMovie} onSearchClick={this.handleSearchBtnClick} />
                  : <SearchHeader onAddMovie={this.handleAddMovie}>
                    <SearchPanel onSearchValueChange={this.handleFilterChange} />
                  </SearchHeader>
              }
            </Header>
            <Main filter={this.state.filter} onFilterChange={this.handleFilterChange}>
              <MoviesList moviesList={this.state.movies} onMovieCardClick={this.handleMovieCardClick} />
            </Main>
          </div>
        </ErrorBoundary>
        <Footer />
      </div>
    );
  }
};

export default App;
