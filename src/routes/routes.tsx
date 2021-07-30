import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from '@src:pages/collections/collections';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/collections' />
      </Route>

      <Route path='/collections' render={App} />
    </Switch>
  </Router>
);

export default Routes;
