import React from 'react';
import { Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Dashboard from './dashboard/containers/Dashboard';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const routes = [
	require('./dashboard').default,
];

const layouts = [];
layouts['layout'] = Layout;

export const history = createBrowserHistory();

const components = routes.map((component) => {
  return <PrivateRoute key={component.path} layout_type={layouts[component.layout_name]} path={component.path} component={component.component} /> 
})

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        {components}
        <PublicRoute path="/login" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
