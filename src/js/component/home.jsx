import React from "react";

import { NavBar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container">
			<NavBar />
			<Jumbotron />
			<div className="container" >
			<div className="row row-cols-4">
			<Cards title="React Introduction" text="Just to let us know how useful the props can be when working with React" button="I'm not working"/>
			<Cards title="It takes practice" text="Just like anything else in life, the more you practice, the more you get used to it" button="Nothing here"/>
			<Cards title="Take control" text="Some functions doesn't make too much sense up to the point we start checking them in action" button="Useless button"/>
			<Cards title="See you later" text="Little by little, we're building up our knowledge in order to become master developers" button="See ya!"/>			
			</div>
			</div>
			<Footer />
		</div>
	)
};



export default Home;
