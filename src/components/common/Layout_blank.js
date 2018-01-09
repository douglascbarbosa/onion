import React from 'react'
import Header from './Header';
import Navigation from '../navigation/components/Navigation';
import Footer from './Footer';

import {layoutLoader} from '../../assets/adminlte'

export default class Layout_blank extends React.Component {

    componentWillMount(){
    }

    componentDidMount(){
      layoutLoader(window.$);
      window.$('body').addClass('login-page');
    }
    
    componentWillUnmount(){
      window.$('body').removeClass('login-page');
    }

    render() {

      return (

        <div>
          {this.props.children}
        </div>

      )
  }
}

