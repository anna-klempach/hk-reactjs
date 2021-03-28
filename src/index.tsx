import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import './styles.scss';
import './assets/images/logo.png';
import './assets/images/no-image.png';
import './assets/fonts/fonts.scss';
import store from './redux/store';

function importAll(r: any) {
  r.keys().forEach(r);
}

importAll(require.context('./assets/images', true, /\.jpg$/));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('output')
);
