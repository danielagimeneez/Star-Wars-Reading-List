import React, {useContext} from "react";
import "../../styles/home.css";
import {Card} from "../component/Card";
import {Context} from "../store/appContext";

export const Home = () => {
	const {store, actions}= useContext(Context)
	return(
		<div className = "Container">
			<div className="d-flex flex-wrap w-100">
				<h1>Characters</h1>
				<div className="d-flex overflow-scroll">
					{store.people.map(
						(people, index) => {
							return (
								<Card 
									key={people.uid}
									item={people} 
									resource={"people"}/>
							);
						}
					)};
				</div>

				<h1>Planets</h1>
				<div className="d-flex overflow-scroll">
					{store.planets.map(
						(planet, index) => {
							return (
							<Card 
									key={planet.uid}
						  			item={planet} 
						  			resource={"planets"}/>
							);
						}
					)};			
				</div>

				<h1>Vehicles</h1>
				<div className="d-flex overflow-scroll">
					{store.vehicles.map(
						(vehicle, index) => {
							return (
							<Card 
									key={vehicle.uid}
							  		item={vehicle} 
							  		resource={"vehicles"}/>
							);
						}
					)};
				</div>			
			</div>
		</div>	
	);
};