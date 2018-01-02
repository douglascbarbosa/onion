import React from 'react'
import Header from './Header';
import Navigation from '../navigation/components/Navigation';
import Footer from './Footer';

export default class Layout_blank extends React.Component {

    componentWillMount(){
      window.$('body').addClass('login-page');
    }

    render() {

      return (

        <div>
          {this.props.children}
        </div>

      )
  }
}

