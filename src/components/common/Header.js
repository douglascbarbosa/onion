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


		      <div className="navbar-custom-menu">
		        <ul className="nav navbar-nav">
		          <li>
		            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
		          </li>
		        </ul>
		      </div>

	    	
	    </nav>

	  </header>

    )
  }
}

