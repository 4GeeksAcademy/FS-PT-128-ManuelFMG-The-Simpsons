import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";



export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();


	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fondo">

			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>

				<div className="dropdown d-flex flex-column flex-lg-row gap-2 ms-lg-auto">

					<button
						className="btn btn-outline-danger dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
					>
						❤️ Characters ({store.favoritesCharacters.length})
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favoritesCharacters.length === 0 ? (
							<li className="dropdown-item text-muted">
								No favoritesCharacters yet
							</li>
						) : (
							store.favoritesCharacters.map(fav => (
								<li
									key={fav.id}
									className="dropdown-item d-flex justify-content-between align-items-center"
								>
									<span>{fav.name}</span>

									<button
										className="btn btn-sm text-danger"
										onClick={() =>
											dispatch({
												type: "REMOVE_FAVORITE_CHARACTERS",
												payload: fav.id
											})
										}
									>
										<i className="fa-solid fa-trash"></i>
									</button>
								</li>
							))
						)}
					</ul>
				</div>

				

				<div className="dropdown d-flex flex-column flex-lg-row gap-2 ms-lg-auto">

					<button
						className="btn btn-outline-danger dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
					>
						❤️ Locations ({store.favoritesLocations.length})
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favoritesLocations.length === 0 ? (
							<li className="dropdown-item text-muted">
								No favoritesLocations yet
							</li>
						) : (
							store.favoritesLocations.map(fav => (
								<li
									key={fav.id}
									className="dropdown-item d-flex justify-content-between align-items-center"
								>
									<span>{fav.name}</span>

									<button
										className="btn btn-sm text-danger"
										onClick={() =>
											dispatch({
												type: "REMOVE_FAVORITE_LOCATIONS",
												payload: fav.id
											})
										}
									>
										<i className="fa-solid fa-trash"></i>
									</button>
								</li>
							))
						)}
					</ul>
				</div>


				
			</div>
		</nav>
	);
};