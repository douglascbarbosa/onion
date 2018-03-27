import accountReducer from './accountReducer'
import Accounts from './containers/Accounts';
import Account from './containers/Account';

export default {
	title: 'Accounts',
	menu_name: 'Accounts',
	icon: 'fa-university',
	path: '/accounts',
	component: Accounts,
	public: false,
	layout_name: 'layout',
	child_routes: [
		{
			title: 'Account',
			icon: 'fa-university',
			path: '/account',
			component: Account,
			public: false,
			layout_name: 'layout'
		},
		{
			title: 'Account',
			icon: 'fa-university',
			path: '/editaccount/:id',
			component: Account,
			public: false,
			layout_name: 'layout'
		}
		
	]
}

export {accountReducer}

export * from './AccountActions'