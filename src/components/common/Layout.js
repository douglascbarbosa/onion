import React from 'react'
import Header from './Header';
import ContentHeader from './ContentHeader';
import Navigation from '../navigation/components/Navigation';
import Footer from './Footer';

import {layoutLoader, controlsidebarLoader, pushmenuLoader, treeLoader, boxRefreshLoader, boxWidgetLoader } from '../../assets/adminlte'

export default class Layout extends React.Component {

  componentDidMount(){

    boxRefreshLoader(window.$)
    boxWidgetLoader(window.$)
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

          <ContentHeader />

          <section className="content">
            {this.props.children}          
          </section>

    		</div>

        <Footer />

      </div>
    )
  }
}

