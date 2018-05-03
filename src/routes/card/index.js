import Cards from './containers/Cards';
import Card from './containers/Card';
import cardReducer from './cardReducer';

export default {
	title: 'Credit cards',
	menu_name: 'Credit cards',
	icon: 'fa-credit-card',
	path: '/cards',
	component: Cards,
	public: false,
	layout_name: 'layout',
	child_routes: [
		{
			title: 'Credit card',
			icon: 'fa-credit-card',
			path: '/card',
			component: Card,
			public: false,
			layout_name: 'layout'
		}
	]
}

export {cardReducer}

export * from './CardActions'