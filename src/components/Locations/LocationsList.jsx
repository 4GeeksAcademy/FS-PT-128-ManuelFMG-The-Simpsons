import useGlobalReducer from "../../hooks/useGlobalReducer"
import { CartaLocalizacion } from "./LocationsCard"




export const Localizacion = () => {

    const { store, dispatch } = useGlobalReducer()
    return (
        <div className="conatainer contenedor_carta mt-5 pb-3" >
            {
                store.localizaciones.map(localizacion => (
                    <CartaLocalizacion key={localizacion.id} localizacion={localizacion}/>
                ))
            }
        </div>
    )


}