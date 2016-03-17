import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.react';
import Main from './components/main.react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
  </Route>
);
