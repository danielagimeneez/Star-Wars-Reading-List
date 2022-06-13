const API_URL = "https://www.swapi.tech/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: []
		},
		actions: {
			getPeople: async () => {
				try {
					const response = await fetch(
						`${API_URL}/people`
					);
					const body = await response.json();
					if (response.status !== 200) {
						alert("Woops no pudimos cargar los personajes");
						return;
					}
					setStore({
						people: body.results
					});
				} catch(error) {
					alert("¡Ay! Se cayó el servidor");
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch(
						`${API_URL}/planets`
					);
					const body = await response.json();
					if (response.status !== 200) {
						alert("Woops no pudimos cargar los planetas");
						return;
					}
					setStore({
						planets: body.results
					});
				} catch(error) {
					alert("¡Ay! Se cayó el servidor");
				}
			},
			getVehicles: async () => {
				try {
					const response = await fetch(
						`${API_URL}/vehicles`
					);
					const body = await response.json();
					if (response.status !== 200) {
						alert("Woops no pudimos cargar los vehículos");
						return;
					}
					setStore({
						vehicles: body.results
					});
				} catch(error) {
					alert("¡Ay! Se cayó el servidor");
				}
			}	
		}
	};
};

export default getState;
