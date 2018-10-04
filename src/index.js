import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import ConnectedIntlProvider from './app/providers/ConnectedIntlProvider';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import theme from './app/themes/base';
import './static/css/reset.css';
import store, { history } from './store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
