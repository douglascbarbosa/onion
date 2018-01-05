import React from 'react'
import routes from '../../routes';

console.log(routes);

export default class ContentHeader extends React.Component {


  constructor(props) {
  	super(props);
  	this.state = {
  		title: 'Onion'
  	}
  }	

  setRouteInfo(route){
  	this.setState({title: route.title})
  }	

  componentWillMount(){
  	const {pathname} = window.location;
  	let self = this;

  	//Seach for the current route to take the information!
  	routes.forEach( route => {

  		if (pathname === route.path){
  			self.setRouteInfo(route);
  		}else if (route.child_routes){
  			
  			console.log(route.child_routes);

  			route.child_routes.forEach( route => {
  					if (pathname === route.path){
  						self.setRouteInfo(route);
  					}
  			});
  		}
  	})


  }

  render() {
  	
    return (

	  <section className="content-header">
	    <h1>
	      {this.state.title}
	      <small>it all starts here</small>
	    </h1>
	    <ol className="breadcrumb">
	      <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
	      <li><a href="#">Examples</a></li>
	      <li className="active">Blank page</li>
	    </ol>
	  </section>


    )
  }
}

