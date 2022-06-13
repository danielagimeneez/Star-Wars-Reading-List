import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img src="https://th.bing.com/th/id/OIP.gxi_tc2r_yqOVNGVQwfSiwHaEK?pid=ImgDet&rs=1" 
			className="w-50"
    		style={{
            maxWidth: "250px",
          	}}/>
			</Link>
			<div class="dropdown">
			  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
			    Favorites
			  </button>
			  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
			    <li><a class="dropdown-item" href="#">Action</a></li>
			    <li><a class="dropdown-item" href="#">Another action</a></li>
			    <li><a class="dropdown-item" href="#">Something else here</a></li>
			  </ul>
			</div>
		</nav>
	);
};

// <img src="https://th.bing.com/th/id/OIP.gxi_tc2r_yqOVNGVQwfSiwHaEK?pid=ImgDet&rs=1"/> Logo de Star Wars