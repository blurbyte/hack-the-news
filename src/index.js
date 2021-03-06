//required for redux-saga generatos
import "regenerator-runtime/runtime";

/*eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

//styles reset
import 'sanitize.css/sanitize.css';

//router
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import routes from './routes';

//redux store
import configureStore from './store';

//es6 promises polyfill
import Promise from 'promise-polyfill';

if (!window.Promise) {
  window.Promise = Promise;
}

//load favicon
import './favicon.ico';

//custom global styles
import './styles/globalStyles';

const initialState = {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} render={applyRouterMiddleware(useScroll())} />
  </Provider>,
  document.getElementById('app')
);

// install ServiceWorker
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
