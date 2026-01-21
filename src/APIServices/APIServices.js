export const obtenerPersonajes = async (dispatch)=>{
    const response = await fetch ('https://thesimpsonsapi.com/api/characters')
    const data = await response.json()
    dispatch ({type: 'obtener_personajes', payload: data.results})
}


export const obtenerPersonaje = async (dispatch, id)=>{
    const response = await fetch (`https://thesimpsonsapi.com/api/characters/${id}`)
    const data = await response.json()
    dispatch ({type: 'obtener_personaje', payload: data})
}



export const obtenerLocalizaciones = async (dispatch)=>{
    const response = await fetch ('https://thesimpsonsapi.com/api/locations')
    const data = await response.json()
    dispatch ({type: 'obtener_localizaciones', payload: data.results})
}


export const obtenerLocalizacion = async (dispatch, id)=>{
    const response = await fetch (`https://thesimpsonsapi.com/api/locations/${id}`)
    const data = await response.json()
    dispatch ({type: 'obtener_localizacion', payload: data})
}