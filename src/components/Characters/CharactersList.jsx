import useGlobalReducer from "../../hooks/useGlobalReducer"
import { CartaPersonaje } from "./CharactersCard"

export const Personaje = () => {

    const { store, dispatch } = useGlobalReducer()
    return (
        <div className="conatainer contenedor_carta mb-5 pb-3" >
            {
                store.personajes.map(personaje => (
                    <CartaPersonaje key={personaje.id} personaje={personaje}/>
                ))
            }
        </div>
    )


}