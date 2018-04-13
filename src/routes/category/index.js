import Categories from './containers/Categories';
import Category from './containers/Category';
import categoryReducer from './categoryReducer';

export default {
	menu_name: 'Categories',
	icon: 'fa-tags',
	title: 'Categories',
	path: '/categories',
	component: Categories,
	public: false,
	layout_name: 'layout',
	child_routes:[
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

export {categoryReducer}

export * from './CategoryActions'