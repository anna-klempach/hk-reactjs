import * as React from 'react';
import './search-panel.scss';

function SearchPanel(): React.ReactElement {
  return (
    <div className="search-panel">
      <input type="text" className="search-panel__input" placeholder="What do you want to watch?" />
      <button className="button-primary">SEARCH</button>
    </div>
  );
}

export default SearchPanel;
