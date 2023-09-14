import axios from 'axios';

const pokemonApi = axios.create({ //creamos una instanca de Axios llamada pokemonApi. La funcion axios.create nos permiten configurar opciones especificas para esta instancia. 
    baseURL: 'https://pokeapi.co/api/v2/pokemon/' //se configula URL de la API de pokemones. Esto significa ue todas las solicitudes realizadas a traves de pokemonApi tendran la URL base como punto de partido.
})

export default pokemonApi;