import React from 'react'
import LoginInfo from '../../user/components/LoginInfo';
import NavMenu from './NavMenu';

import {controlsidebarLoader, pushmenuLoader, treeLoader} from '../../../assets/adminlte'


export default class Navigation extends React.Component {
  
  componentDidMount(){

    // pushmenuLoader(window.$)
    // controlsidebarLoader(window.$)
    // treeLoader(window.$)

  }

  render() {
    return (

	  <aside className="main-sidebar">
	  	<section className="sidebar">
	  		<LoginInfo />
	  		<NavMenu />
	  	</section>
	  </aside>


    )
  }
}

