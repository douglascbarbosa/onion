import Card from './containers/Card';

export default {
	child_routes:[
		{
			menu_name: 'Cards',
			icon: 'fa-credit-card',
			path: '/cards',
			component: Card,
			public: false,
			layout_name: 'layout',
		 }
	]
}