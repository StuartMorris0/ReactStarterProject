import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Login from './login';
import NotFound from './notfound';
import Redux from './redux';
import Profile from './profile';
import UIPage from './ui';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/ui" component={UIPage} />
      <Route exact path="/redux" component={Redux} />
      <Route exact path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default routes;
