import { useEffect } from "react"
import { obtenerLocalizacion } from "../APIServices/APIServices"
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export const IndividualLocations = () => {

    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    console.log(store.localizacion);

    useEffect(() => {

        obtenerLocalizacion(dispatch, id)

    }, [])


    return (


        <div className="container d-flex justify-content-center p-4" style={{"maxWidth": "800px"}} >


            <div className="card d-flex" style={{ "minWidth": "240px", "minHeight": "200px","maxWidth": "1200px", "maxHeight": "500px"}} >
                <div className="row g-0">
                    <div className=" col-3 d-flex justify-content-center">
                        <img style={{ "minWidth": "300px", "minHeight": "200px" }} src={`https://cdn.thesimpsonsapi.com/1280/location/${store.localizacion.id}.webp`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="container col md-8 text-center  ">
                        <div className="card-body ">
                            <h5 className="card-title"><strong> Name: </strong> {store.localizacion.name}</h5>
                            <p className="card-text"><strong> Town: </strong> {store.localizacion.town}</p>
                            <p className="card-text"><strong> Use: </strong> {store.localizacion.use}</p>
                            

                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}