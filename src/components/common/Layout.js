import React from 'react'
import Header from './Header';
import Navigation from '../navigation/components/Navigation';
import Footer from './Footer';

import {layoutLoader, controlsidebarLoader, pushmenuLoader, treeLoader } from '../../assets/adminlte'

export default class Layout extends React.Component {

  componentDidMount(){

    layoutLoader(window.$);
    pushmenuLoader(window.$)
    controlsidebarLoader(window.$)
    treeLoader(window.$)

  }

  render() {
    return (
      <div className="wrapper">
      	<Header />
      	<Navigation />

    		<div className="content-wrapper">

          <section className="content-header">
            <h1>
              Blank page
              <small>it all starts here</small>
            </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
              <li><a href="#">Examples</a></li>
              <li className="active">Blank page</li>
            </ol>
          </section>

          <section className="content">
            {this.props.children}          
          </section>

    		</div>

        <Footer />

      </div>
    )
  }
}

