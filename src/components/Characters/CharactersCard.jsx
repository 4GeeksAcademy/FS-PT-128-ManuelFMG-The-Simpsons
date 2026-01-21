import { Link } from "react-router-dom"
import useGlobalReducer from "../../hooks/useGlobalReducer"




export const CartaPersonaje = ({ personaje }) => {

    const { store, dispatch } = useGlobalReducer();


    const isFavorite = store.favoritesCharacters.some(
        fav => fav.id === personaje.id
    );




    return (


        <div
            className="card shadow-sm border-0 me-3 h-100"
            style={{ width: "18rem", minWidth: "18rem" }}
            onMouseEnter={(e) => e.currentTarget.classList.add("shadow-lg")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("shadow-lg")}

        >

            <div className="bg-warning bg-opacity-10 rounded-top d-flex justify-content-center p-4">
                <Link to={`/IndividualCharacters/${personaje.id}`} >
                    <img
                        src={`https://cdn.thesimpsonsapi.com/200${personaje.portrait_path}`}
                        alt={personaje.name}
                        className="img-fluid"
                        style={{ maxHeight: "160px" }}
                    />
                </Link>

            </div>


            <div className="card-body text-center ">
                <h5 className="card-title fw-bold mb-1 d-flex justify-content-center align-items-center gap-2">
                    <span>{personaje.name}</span>

                    <button
                        className="btn p-0 border-0 bg-transparent"
                        onClick={() =>
                            dispatch({
                                type: isFavorite ? "REMOVE_FAVORITE_CHARACTERS" : "ADD_FAVORITE_CHARACTERS",
                                payload: isFavorite ? personaje.id : personaje
                            })
                        }
                    >
                        <i
                            className={`fa-${isFavorite ? "solid" : "regular"} fa-heart fs-4 
                            ${isFavorite ? "text-danger" : "text-secondary"}`}
                            style={{ transition: "transform 0.2s", transform: isFavorite ? "scale(1.2)" : "scale(1)" }}
                        ></i>
                    </button>


                </h5>


                <p className="text-warning mb-3">
                    {personaje.occupation || "Unknown"}
                </p>


                <div className="d-flex justify-content-center gap-2 mb-3">
                    <span className="badge rounded-pill text-bg-light border">
                        Age: {personaje.age ?? "?"}
                    </span>

                    <span className="badge rounded-pill text-bg-success">
                        {personaje.status}
                    </span>
                </div>





            </div>

        </div>


    )
}