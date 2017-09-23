/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import MainPage from './containers/Main';

export default () => (
  <App>
    <Switch>
      <Route path="/home" component={MainPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  </App>
);
