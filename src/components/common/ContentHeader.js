import React from 'react'
import routes from '../../routes';
import {Link} from 'react-router-dom'


export default class ContentHeader extends React.Component {


  constructor(props) {
  	super(props);
  	this.state = {
  		icon: 'fa fa-dashboard',
  		title: 'Onion',
  		subtitle: ''

  	}
  }	

  setRouteInfo(route){
  	this.setState({ title: route.title || 'OnionPFT',
  					subtitle: route.subtitle,
  					icon: route.icon
  				  })
  }	

  componentWillMount(){
  	const {pathname} = window.location;
  	let self = this;

  	//Seach for the current route to take the information!
  	routes.forEach( route => {

  		if (pathname === route.path){
  			self.setRouteInfo(route);
  		}else if (route.child_routes){
  			route.child_routes.forEach( route => {
  					if (pathname === route.path){
  						self.setRouteInfo(route);
  					}
  			});
  		}
  	})
  }


  renderBreadcrumb(){
  	let crumbs = [];
	const {pathname} = window.location;

	//Add the default crumb!
	crumbs.push({
		path: '/',
		menu_name: 'Home',
		icon: 'fa fa-home'
	});

  	//Search for the route!
  	routes.forEach(route => {

  		if (pathname === route.path){
  			crumbs.push({path : route.path, menu_name: route.menu_name, active : true});
  		}else if (route.child_routes){

  			route.child_routes.forEach( childRoute => {
  					if (pathname === childRoute.path){
  						//Only add the father if he has a path!
  						if (route.path){
	  						crumbs.push({path : route.path, menu_name: route.menu_name});
  						}

  						crumbs.push({path : childRoute.path, menu_name: childRoute.menu_name, active: true } );
  					}
  			});
  		}

  	});

  	return crumbs.map( crumb => {
  		if (crumb.active){
	  		return <li key={crumb.path} className="active" > {crumb.menu_name} </li>
  		}else{
	  		return <li key={crumb.path} ><Link to={crumb.path} ><i className={crumb.icon}></i> {crumb.menu_name} </Link></li>
  		}
  	});

  }

  render() {
  	
    return (

	  <section className="content-header">
	    <h1>
	      <i className={'fa ' + this.state.icon} ></i> {this.state.title}
	      <small>{this.state.subtitle}</small>
	    </h1>
	    <ol className="breadcrumb">
	      {this.renderBreadcrumb()}
	    </ol>
	  </section>

    )
  }
}

