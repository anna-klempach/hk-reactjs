import * as React from 'react';
import SearchPanel from '../../components/search-panel/search-panel';
import Logo from '../../components/logo/logo';
import './search-header.scss';

function SearchHeader(): React.ReactElement {
  return (
    <div className="search-header">
      <div className="search-header__top">
        <Logo />
        <button className="add-movie-btn">+ ADD MOVIE</button>
      </div>
      <h1 className="search-header__title">FIND YOUR MOVIE</h1>
      <SearchPanel />
    </div>
  );
}

export default SearchHeader;
