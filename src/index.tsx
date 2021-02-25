import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/app/app';
import './styles.scss';
import './assets/images/logo.png';
import './assets/fonts/fonts.scss';

function importAll(r: any) {
  r.keys().forEach(r);
}

importAll(require.context('./assets/images', true, /\.jpg$/));

ReactDOM.render(
  <App />,
  document.getElementById('output')
);
