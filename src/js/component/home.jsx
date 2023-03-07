import React from "react";

import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
			<Jumbotron />
			<div className="container" >
			<div className="row row-cols-1 row-cols-md-4 g-4">
			<Cards />
			<Cards />
			<Cards />
			<Cards />			
			</div>
			</div>
			<Footer />
		</div>
	)
};



export default Home;
