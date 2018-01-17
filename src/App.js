import React from 'react';
import ReactDOM from 'react-dom';
//import { createBrowserHistory } from 'history';

import {Provider} from 'react-redux'

//import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
//import Layout from './components/common/Layout.js';

//import Dashboard from './routes/dashboard/containers/Dashboard';

import registerServiceWorker from './registerServiceWorker';
//import {syncHistoryWithStore} from 'react-router-redux'
import store from './store/configureStore'

import AppRouter from './routes/AppRouter';

//const history = syncHistoryWithStore(createBrowserHistory(), store);

//const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);	

ReactDOM.render( (
	<Provider store={store}>
		<AppRouter />
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
