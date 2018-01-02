import React from 'react';
import { Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Dashboard from './dashboard/containers/Dashboard';
import Layout from '../components/common/Layout';
import Layout_blank from '../components/common/Layout_blank';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import routes from './';


const layouts = [];
layouts['layout'] = Layout;
layouts['layout_blank'] = Layout_blank;

export const history = createBrowserHistory();

function getRoute( route ){

	if (route.component){
		return <PrivateRoute key={route.path} layout_type={layouts[route.layout_name]} path={route.path} component={route.component} />
	}else{
		return null
	}

}


const componentsRoutes = routes.map((route) => {

	if (route.child_routes){
		return route.child_routes.map((route) => { return getRoute(route) } ); 
	}else{
		return getRoute(route)
	}

});

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        {componentsRoutes}
        <PublicRoute path="/login" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
