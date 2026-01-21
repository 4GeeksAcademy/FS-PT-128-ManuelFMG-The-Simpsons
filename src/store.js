export const initialStore = () => {
  return {
    personajes: [],
    personaje: {},
    localizaciones: [],
    localizacion: {},
    favoritesCharacters: [],
    favoritesLocations: []


  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'obtener_personajes':
      return {
        ...store,
        personajes: action.payload
      }
    case 'obtener_personaje':
      return {
        ...store,
        personaje: action.payload
      }

    case 'obtener_localizaciones':
      return {
        ...store,
        localizaciones: action.payload
      }

    case 'obtener_localizacion':
      return {
        ...store,
        localizacion: action.payload
      }

    case "ADD_FAVORITE_CHARACTERS":
      if (store.favoritesCharacters.some(fav => fav.id === action.payload.id)) {
        return store; 
      }
      return {
        ...store,
        favoritesCharacters: [...store.favoritesCharacters, action.payload]
      };

    case "REMOVE_FAVORITE_CHARACTERS":
      return {
        ...store,
        favoritesCharacters: store.favoritesCharacters.filter(
          fav => fav.id !== action.payload
        )
      };
    case "ADD_FAVORITE_LOCATIONS":
      if (store.favoritesLocations.some(fav => fav.id === action.payload.id)) {
        return store; 
      }
      return {
        ...store,
        favoritesLocations: [...store.favoritesLocations, action.payload]
      };

    case "REMOVE_FAVORITE_LOCATIONS":
      return {
        ...store,
        favoritesLocations: store.favoritesLocations.filter(
          fav => fav.id !== action.payload
        )
      };


    default:
      throw Error('Unknown action.');
  }
}
