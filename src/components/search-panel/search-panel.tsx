import * as React from 'react';
import './search-panel.scss';

export interface SearchPanelProps {
  initialValue: string,
  onSearchValueChange: (param: string) => void
}

function SearchPanel(props: SearchPanelProps): React.ReactElement {
  let searchValue = props.initialValue || '';

  const handleSearchValueChange = (e: React.BaseSyntheticEvent): void => {
    const { target } = e;
    const { value } = target;
    searchValue = value;
  }

  const handleSearchValueSubmit = (e: React.BaseSyntheticEvent): void => {
    props.onSearchValueChange(searchValue);
  }

  const handleSearchKeyPress = (e: React.KeyboardEvent): void => {
    const { key } = e;
    if (key === 'Enter') {
      props.onSearchValueChange(searchValue);
    }
  }

  return (
    <div className="search-panel">
      <input
        type="text"
        className="search-panel__input"
        defaultValue={searchValue}
        placeholder="What do you want to watch?"
        onChange={e => handleSearchValueChange(e)}
        onKeyPress={e => handleSearchKeyPress(e)}
        />
      <button className="button-primary" onClick={e => handleSearchValueSubmit(e)}>SEARCH</button>
    </div>
  );
}

export default SearchPanel;
