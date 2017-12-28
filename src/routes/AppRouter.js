import React from 'react';
import { Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Dashboard from './dashboard/containers/Dashboard';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const routes = [
	require('./dashboard').default,
];


export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PrivateRoute layout_type={Layout} path="/dashboard" component={Dashboard} />
        <PublicRoute path="/login" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
