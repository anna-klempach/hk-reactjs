import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Movie } from '../../models/interfaces/movie';
import './movie-card.scss';

export interface MovieCardProps {
  movie: Movie
}

interface MovieCardState {
  movie: Movie,
  isMenuVisible: boolean
}

export default class MovieCard extends React.Component<MovieCardProps, MovieCardState>{
  constructor(props: MovieCardProps) {
    super(props);
    this.state = {
      movie: props.movie,
      isMenuVisible: false
    }
  }

  toggleMenuVisible(value: boolean): void {
    this.setState({
      isMenuVisible: value
    })
  }

  onClickMenuBtn = (): void => {
    this.toggleMenuVisible(true);
  }

  onClickCloseMenuBtn = (): void => {
    this.toggleMenuVisible(false);
  }

  onClickEditMenuBtn = (): void => {
    this.toggleMenuVisible(false);
  }

  onClickDeleteMenuBtn = (): void => {
    this.toggleMenuVisible(false);
  }

  render(): React.ReactElement {
    const {movie} = this.state;
    return (
      <div className="movie-card" key={movie.id}>
        <img className="movie-image" src={movie.poster_path} alt="poster" />
        <div className="movie-info">
          <p className="movie-title">{movie.title}</p>
          <p>{movie.genres.join(', ')}</p>
          <p className="movie-release-date">{new Date(movie.release_date).getFullYear()}</p>
        </div>
        <button className="menu-button" onClick={this.onClickMenuBtn}>
          <span className="menu-button__dot" />
          <span className="menu-button__dot" />
          <span className="menu-button__dot" />
        </button>
        {
          this.state.isMenuVisible
          && <div className="menu-display">
            <button className="menu-display__close button-dark" onClick={this.onClickCloseMenuBtn}>x</button>
            <button className="button-dark" onClick={this.onClickEditMenuBtn}>Edit</button>
            <button className="button-dark" onClick={this.onClickDeleteMenuBtn}>Delete</button>
          </div>
        }
      </div>
    )
  }
}


// This proptypes is done for tast 3
// TODO: Remove as soon as task is completed
// @ts-ignore
MovieCard.propTypes = {
  movie: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    revenue: PropTypes.number,
    budget: PropTypes.number,
    tagline: PropTypes.string
  })
}

// @ts-ignore
MovieCard.defaultProps = {
  movie: {
    'id': 111111,
    'title': 'No Title Provided',
    'tagline': 'No tagline provided',
    'vote_average': 0,
    'vote_count': 0,
    'release_date': '01-01-2021',
    'poster_path': '',
    'overview': 'No overview provided',
    'budget': 0,
    'revenue': 0,
    'genres': ['No genre'],
    'runtime': 0
  }
}
