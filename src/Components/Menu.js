import React from 'react';
import '../App.css';
import{ NavLink} from 'react-router-dom';

const Menu= () => {

    return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
		<a className="navbar-brand" href="#">
			FULLTLAB
		</a>
		<button
		  className="navbar-toggler"
		  type="button"
		  data-toggle="collapse"
		  data-target="#navbarCollapse"
		  aria-controls="navbarCollapse"
		  aria-expanded="false"
		  aria-label="Toggle navigation"
		>
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="topnavigatiobar">
		<ul className="top-nav">
				<li className="nav-item active">
				  <a className="nav-link" href="#">About</a>
				</li>

				<li className="nav-item dropdown">
				  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Products
				  </a>
				  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
					<a className="dropdown-item" href="#">Personal Loan</a>
					<a className="dropdown-item" href="#">Home Loan</a>
					<a className="dropdown-item" href="#">Education Loan</a>
				  </div>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#">E-Service</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#">More</a>
				</li>
				<li className="nav-item">
			  		<a className="nav-link" href="#">Login</a>
				</li>
			  </ul>
			  </div>
			<div className="collapse navbar-collapse" id="navbarCollapse">
			<ul className="navbar-nav mr-auto sidenav" id="navAccordion">
			<li className="nav-item">
				<NavLink activeclassName='is-active' to="/Home">
					<a className="nav-link" href="#">Home</a>
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink activeclassName="Records" to="/records">
					<a className="nav-link" href="#">Search Records</a>
				</NavLink>
			</li>
			<li className="nav-item">
			  <a
				className="nav-link nav-link-collapse"
				href="#"
				id="hasSubItems"
				data-toggle="collapse"
				data-target="#collapseSubItems2"
				aria-controls="collapseSubItems2"
				aria-expanded="false"
			  >Product Information <i class="fa fa-plus" aria-hidden="true"></i></a>
			  <ul className="nav-second-level collapse" id="collapseSubItems2" data-parent="#navAccordion">
				<li className="nav-item">
				  <a className="nav-link" href="#">
					<span className="nav-link-text">Product 1</span>
				  </a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#">
					<span className="nav-link-text">Product 2</span>
				  </a>
				</li>
			  </ul>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="#">Reviews</a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="#">FAQ's</a>
			</li>
			<li className="nav-item">
			  		<a className="nav-link" href="#">Login</a>
				</li>
				<li className="nav-item">
			  		<a className="nav-link" href="#">Signup</a>
				</li>			
		  </ul>		  
		</div>
	  </nav>
		)
		}
	
	export default Menu;
