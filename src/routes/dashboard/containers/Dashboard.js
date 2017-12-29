import React from 'react'
import {Link} from 'react-router-dom'

export default class Dashboard extends React.Component {
  render() {
    return (
    	<div>
            <Link to='/login'>Teste login</Link>        
            <Link to='/dashboard'>Teste Dashboard</Link>        
    		<p>	Teste </p>
    		<p>	Teste </p>
    		<p>	Teste </p>
    		<p>	Teste </p>
    		<p>	Teste </p>
    	</div>

    )
  }
}

