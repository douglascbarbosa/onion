import React from 'react'

export default class Header extends React.Component {
  render() {
    return (

	  <header className="main-header">

	    <a href="index2.html" className="logo">
	      <span className="logo-mini"><b>A</b>LT</span>
	      <span className="logo-lg"><b>Onion</b>PFT</span>
	    </a>


	    <nav className="navbar navbar-static-top">

		      <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
		        <span className="sr-only">Toggle navigation</span>
		      </a>

	    	
	    </nav>

	  </header>

    )
  }
}

