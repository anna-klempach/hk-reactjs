import * as React from 'react';
import './movies-list.scss';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../movie-card/movie-card';
import { Movie, MovieQueryParams } from '../../models/movie';
import { selectMovies } from '../../redux/selectors';
import { deleteMovieThunk, getMoviesThunk, updateMovieThunk } from '../../redux/thunk';

export interface MoviesListProps {
  movieQueryParams: MovieQueryParams
}

function MoviesList({ movieQueryParams }: MoviesListProps): React.ReactElement {
  const dispatch = useDispatch();
  const moviesList = useSelector(selectMovies);

  React.useEffect(() => {
    dispatch(getMoviesThunk(movieQueryParams));
  }, [movieQueryParams]);

  const handleDeleteMovie = (id: number): void => {
    dispatch(deleteMovieThunk(id, movieQueryParams));
  };

  const handleUpdateMovie = (movie: Movie): void => {
    dispatch(updateMovieThunk(movie,movieQueryParams));
  }

  return (
    Array.isArray(moviesList) && moviesList.length !== 0
      ? <>
        <p className="movies-total">
          <span className="movies-total__count">{moviesList.length}</span> movies found.
            </p>
        <div className="movies-list">
          {
            moviesList.map(movie => <MovieCard movie={movie} key={movie.id} onUpdateMovie={handleUpdateMovie}  onDeleteMovie={handleDeleteMovie} />)
          }
        </div>
      </>
      : <div className="movies-not-found-message">
        <p>No Movies Found</p>
      </div>
    );
}

export default MoviesList;
