import Expenses from './containers/Expenses';
import Income from './containers/Income';
import Category from './containers/Category';

export default {
	menu_name: 'Categories',
	icon: 'fa-tags',
	child_routes:[
		{
			title: 'Expenses',
			menu_name: 'Expenses',
			icon: 'fa-tag',
			path: '/expenses',
			component: Expenses,
			public: false,
			layout_name: 'layout',
		 },
		{
			title: 'Income',
			menu_name: 'Income',
			icon: 'fa-tag',
			path: '/income',
			component: Income,
			public: false,
			layout_name: 'layout',
		 },
		{
			title: 'Category',
			icon: 'fa-tag',
			path: '/category/:type',
			component: Category,
			public: false,
			layout_name: 'layout'
		 }


	]
}