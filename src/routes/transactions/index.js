import Transactions from './containers/Transactions';
import Transaction from './containers/Transaction';

export default {
	title: 'Transactions',
	menu_name: 'Transactions',
	icon: 'fa-exchange',
	path: '/transactions',
	component: Transactions,
	public: false,
	layout_name: 'layout',
	child_routes: [
		{
			title: 'Transaction',
			icon: 'fa-exchange',
			path: '/transaction',
			component: Transaction,
			public: false,
			layout_name: 'layout'
		}
	]
}