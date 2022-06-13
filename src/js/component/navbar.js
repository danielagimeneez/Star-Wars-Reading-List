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
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};

// <img src="https://th.bing.com/th/id/OIP.gxi_tc2r_yqOVNGVQwfSiwHaEK?pid=ImgDet&rs=1"/> Logo de Star Wars