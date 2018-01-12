import Accounts from './containers/Accounts';
import Account from './containers/Account';

export default {
	title: 'Accounts',
	menu_name: 'Accounts',
	icon: 'fa-credit-card',
	path: '/accounts',
	component: Accounts,
	public: false,
	layout_name: 'layout',
	child_routes: [
		{
			title: 'Account',
			icon: 'fa-credit-card',
			path: '/account',
			component: Account,
			public: false,
			layout_name: 'layout'
		}
	]
}