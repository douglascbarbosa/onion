import Expenses from './containers/Expenses';
import Income from './containers/Income';

export default {
	menu_name: 'Categories',
	icon: 'fa-credit-card',
	child_routes:[
		{
			title: 'Expenses',
			menu_name: 'Expenses',
			icon: 'fa-credit-card',
			path: '/expenses',
			component: Expenses,
			public: false,
			layout_name: 'layout',
		 },
		{
			title: 'Income',
			menu_name: 'Income',
			icon: 'fa-credit-card',
			path: '/income',
			component: Income,
			public: false,
			layout_name: 'layout',
		 }

	]
}