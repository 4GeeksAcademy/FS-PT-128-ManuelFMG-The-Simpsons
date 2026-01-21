import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Personaje } from "../components/Characters/CharactersList.jsx";
import { Localizacion } from "../components/Locations/LocationsList.jsx";
import { useEffect } from "react";
import { obtenerLocalizaciones, obtenerPersonajes } from "../APIServices/APIServices.js";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer();

  useEffect (()=>{
	obtenerPersonajes(dispatch)
	obtenerLocalizaciones(dispatch)
  },[])

	return (
		<div>

			<Personaje/>
			<Localizacion/>

		</div>


		
		
	);
}; 