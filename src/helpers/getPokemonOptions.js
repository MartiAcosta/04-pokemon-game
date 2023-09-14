//Logica js

import pokemonApi from "@/api/pokemonApi"

const getPokemons = () => { //funcion flecha llamada getPokemons que devuelve un arreglo de números

    const getPokemonsArr = Array.from( Array(650)) //se crea un arreglo llemado getPokemonsArr de 650 posiciones, que se encuntras vacias
    return getPokemonsArr.map( (arg, index) => index + 1 ) // se utiliza el metodo map en el arreglo getPokemonsArr para generar un nuevo arrelo donde cada elemento es el indice del elemnto más 1. 
    //Le pasamos dos parametros:
        // arg: representa el valor del elemento actual en el arreglo pero no se usa; 
        //index: es el index del elemento, al sumarle 1 al index (index + 1) se obtiene un arreglo de numeros que va del 1 al 650, y representa los indeces de los pokemones

}

const getPokemonOptions = async () => {
    const mixedPokemons= getPokemons().sort( () => Math.random() - 0.5 ) 
     //utilizamos la funcion getPokemons para tener la lista de indeces de pokemos del 1 al 650. Con el metodo ".sort()" junto con "Math.random() - 5" los mezclamos aleatoriamente. 
     //el "sort()" ordena el array de manera aleatoria 
     //el "Math.random()" me da numeros randos menores a 1 ej: 0.56465477978, le restamos 0.5 para que me de numeros enteros
     // mixedPokemones contiene los indices de los pokemones en un orde aleatorio.

    const pokemons = await getPokemonNames(mixedPokemons.splice(0,4)) 
    //utilizamos la funcion getPokemonName con los primeros 4 indices del arreglo mixedPokemons
    //el metodo splice(0,4) toma los 4 primeros elementos del arreglo mezclado
    //la funcion getPokemonName se usa con await lo que sugiere que getPokemonNames devuelva una promesa y estes esperando a que se resuelva antes de continuar    
    
    return pokemons
    //la funcion getPokemoOptions devuelve la lista de nombres de los pokemones obtenida arriba.
}

const getPokemonNames = async ( [a,b,c,d] = [] ) => {
//[a,b,c,d] = [] forma de desestructurar un arreglo. La funcion acepta un arreglo como argumento y asigna los primeros 4 elementos de ese arreglo a las variables a, b, c ,d. 

    const promiseArr= [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]
    //se crea un arreglo llamado promiseArr que contiene cuatro llamadas a la funcion "pokemonApi.get()" con los indices a b c d. Esto significa que estas haciendo cuatro solicitudes a la API de pokemones, cada solicitud obtiene datos de un pokemon especifico.
    
    const [p1 , p2 , p3 , p4] = await Promise.all( promiseArr )
    //se utiliza Promise.all para qesperar que todas las promesas en el arreglo pokemonArr se resuelvan. Esto quiere decir que se espera que todas las solicitudes de pokemonApi.get() se completen antes de continuar, esto lo realiza el await.
    //desestrucutracion de datos: una vez que todas las promesas se han resuelto, los datos de cada respuesta de la API se almacenan en las variables "p1, p2, p3, p4"
    
    return [
        { name: p1.data.name, id:p1.data.id },
        { name: p2.data.name, id:p2.data.id },
        { name: p3.data.name, id:p3.data.id },
        { name: p4.data.name, id:p4.data.id },
    ]
    //luego se retornan los datos, la funcion devuelve un arreglo con objetos que contiene los nombres e ID de los pokemon obtenidos de las respuestas de la API, cada objeto se crea utilizando la información de las variables "p1, p2, p3, p4"
}
export default getPokemonOptions;