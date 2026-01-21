import { Link } from "react-router-dom"
import useGlobalReducer from "../../hooks/useGlobalReducer"


export const CartaLocalizacion = ({ localizacion }) => {

    const { store, dispatch } = useGlobalReducer();


    const isFavorite = store.favoritesLocations.some(
        fav => fav.id === localizacion.id
    );

    return (


        <div
            className="card shadow-sm border-0 me-3 h-100"
            style={{ width: "18rem", minWidth: "18rem" }}
            onMouseEnter={(e) => e.currentTarget.classList.add("shadow-lg")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("shadow-lg")}

        >

            <div className="bg-warning bg-opacity-10 rounded-top d-flex justify-content-center p-4">

                <Link to={`/IndividualLocations/${localizacion.id}`} >
                    <img
                        src={`https://cdn.thesimpsonsapi.com/1280${localizacion.image_path}`}
                        alt={localizacion.name}
                        className="img-fluid"
                        style={{ maxHeight: "160px" }}
                    />
                </Link>


            </div>


            <div className="card-body text-center d-flex flex-column justify-content-between">
                <h5 className="card-title fw-bold mb-1">
                    {localizacion.name}
                </h5>



                <div className="d-flex justify-content-center gap-2 mb-3">
                    <span className="badge rounded-pill text-bg-light border">
                        Town: {localizacion.town}
                    </span>

                    <span className="badge rounded-pill text-bg-light border">
                        Use: {localizacion.use}
                    </span>

                </div>
                <div>
                    <button
                        className="btn p-0 border-0 bg-transparent"
                        onClick={() =>
                            dispatch({
                                type: isFavorite ? "REMOVE_FAVORITE_LOCATIONS" : "ADD_FAVORITE_LOCATIONS",
                                payload: isFavorite ? localizacion.id : localizacion
                            })
                        }
                    >
                        <i
                            className={`fa-${isFavorite ? "solid" : "regular"} fa-heart fs-4 
                            ${isFavorite ? "text-danger" : "text-secondary"}`}
                            style={{ transition: "transform 0.2s", transform: isFavorite ? "scale(1.2)" : "scale(1)" }}
                        ></i>
                    </button>

                </div>



            </div>
        </div>


    )
}