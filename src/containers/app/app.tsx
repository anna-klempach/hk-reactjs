import * as React from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../header/header';
import SearchHeader from '../search-header/search-header';
import Main from '../main/main';
import './app.scss';
import ErrorBoundary from '../../components/error-boundary/error-boundary';

export interface AppState {
  searchValue: string
}

class App extends React.Component<Record<string, unknown>, AppState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      searchValue: ''
    }
  }

  render(): React.ReactElement {
    return (
      <div className="app-container">
        <ErrorBoundary>
        <div className="app-container__inner">
          <Header>
            <SearchHeader />
          </Header>
          <Main searchValue={this.state.searchValue} />
        </div>
        </ErrorBoundary>
        <Footer />
      </div>
    );
  }
};

export default App;
