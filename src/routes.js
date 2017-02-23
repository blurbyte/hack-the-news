//Application routes declarations
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Story from './containers/Story';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Story} />
  </Route>
);
