import React from "react";

export const NavBar = () => {
	return (
<nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
		  <ul className="navbar-nav ">
			<li className="nav-item">
			  <a className="nav-link active" aria-current="page" href="#">Home</a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="#">About</a>
			</li>		
            <li className="nav-item">
			  <a className="nav-link" href="#">Services</a>
			</li>	
            <li className="nav-item">
			  <a className="nav-link" href="#">Contact</a>
			</li>		
		  </ul>		  
		</div>
	  </div>
	</nav>
	)
}