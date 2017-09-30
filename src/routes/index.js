import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Default from '../pages/default/default';
import Login from '../pages/login/login';
import Container from '../container';
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={Login}/>
      <Route path="/login" component={Login}/>
      <Route path="/default" component={Default}/>
    </Route>
  </Router>);
export default routes;
