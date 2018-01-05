import React from 'react'
import routes from '../../../routes'
import {Link} from 'react-router-dom'
import NavItem from './NavItem'

export default class NavMenuList extends React.Component {

  renderRouterLink(route){

    return <NavItem key={route.path} exact to={route.path}><i className={'fa ' + route.icon}></i> <span>{route.menu_name}</span></NavItem>

  }

  renderChild(child_routes){
    return child_routes.map((route) => {
      if (!route.public){
        return this.renderRouterLink(route)
      }else{
        return null
      }
    })

  }

  renderRouteList(){
    return routes.map((route) => {

      if (route.child_routes){

        if (route.menu_name){
          return (
            <li key={route.path} className="treeview">
              <a href="#">
                <i className={'fa ' + route.icon}></i> <span>{route.menu_name}</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                {this.renderChild(route.child_routes)}
              </ul>
            </li>
          )
        }else{
          return this.renderChild(route.child_routes)
        }

      }else{
        if (!route.public){
          return  this.renderRouterLink(route)
        }else{
          return null
        }
      }
    })
  }

  render() {
    return (

  		<ul className="sidebar-menu" data-widget="tree">
  		 	<li className="header">MAIN NAVIGATION</li>

        {this.renderRouteList()}
  		 	
  		</ul>

    )
  }
}

