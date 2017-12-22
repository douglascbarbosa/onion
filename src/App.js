import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router'
import { createBrowserHistory } from 'history';
import {Provider} from 'react-redux'
//import './index.css';
import Layout from './components/common/Layout.js';

import Dashboard from './routes/dashboard/containers/Dashboard';

import registerServiceWorker from './registerServiceWorker';
import {syncHistoryWithStore} from 'react-router-redux'
import store from './store/configureStore'

const history = syncHistoryWithStore(createBrowserHistory(), store);

const routes = {
	path: '/',
	indexRoute: { component : Dashboard },
	childRoutes: [
		require('./routes/dashboard').default
	]
}

//const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);	

ReactDOM.render( (
	<Provider store={store}>
		<Router history={history} >
			<Switch>
				<Route path="/" component={Layout}	/>
			</Switch>
		</Router>
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
