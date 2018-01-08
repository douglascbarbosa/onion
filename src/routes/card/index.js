import Card from './containers/Card';

export default {
	child_routes:[
		{
			title: 'Cards',
			menu_name: 'Credit cards',
			icon: 'fa-credit-card',
			path: '/cards',
			component: Card,
			public: false,
			layout_name: 'layout',
		 }
	]
}