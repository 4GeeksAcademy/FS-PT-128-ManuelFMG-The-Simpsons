import { useEffect } from "react"
import { obtenerPersonaje } from "../APIServices/APIServices"
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";

export const IndividualCharacters = () => {

    const { store, dispatch } = useGlobalReducer();
    const { id } = useParams();
    console.log(store.personaje);

    useEffect(() => {

        obtenerPersonaje(dispatch, id)

    }, [])


    return (


        <div className="container d-flex justify-content-center p-4" >


            <div className="card d-flex" style={{ "maxWidth": "840px", "maxHeight": "500px" }} >
                <div className="row g-0">
                    <div className=" col-3 d-flex justify-content-center">
                        <img src={`https://cdn.thesimpsonsapi.com/500/character/${store.personaje.id}.webp`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><strong> Name: </strong> {store.personaje.name}</h5>
                            <p className="card-text"><strong> Age: </strong> {store.personaje.age}</p>
                            <p className="card-text"><strong> Occupation: </strong> {store.personaje.occupation}</p>
                            <p className="card-text fst-italic text-muted mb-0"><strong> Phrase: </strong> <small>{store.personaje.phrases}</small></p>

                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}