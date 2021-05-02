import SearchMoviesPage from './components/search-movies-page/search-movies-page';
import ErrorPage from './components/error-page/error-page';
import MovieDetails from './components/movie-details/movie-details';

const routes = [
  {
    path: '/',
    exact: true,
    component: SearchMoviesPage
  },
  {
    path: '/search',
    component: SearchMoviesPage
  },
  {
    path: '/film/:id',
    component: MovieDetails
  },
  {
    path: '*',
    component: ErrorPage
  },
];

export default routes;
