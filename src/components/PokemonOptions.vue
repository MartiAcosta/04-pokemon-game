<template> <!--Definimos la parte visual del componente PokemonPicture-->
    <div class="options-container"> 
      <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selection', pokemon.id)" >{{ pokemon.name }}</li> <!--Utilizamos la directiva v-for para iterar sobre cada elemento en el arreglo pokemons y crea un elemento de lista <li> para cada Pokemon, creando un elemento de lista <li> para cada pokemon-->
        <!--El atributo :key se utiliza para ayudar a Vue a rastrear los elemntos de la lista,--><!--dentro de cada elemento de lista, se muestra el nombre Pokemon usando la interpolación {{ pokemon.name }}-->
      </ul>
    </div>
  </template>
  
  <script> //aca se realiza la logica y configuracion del componente.
  export default {
    props: { //aca se define las propiedades que el componente espera recibir. 
      pokemons: { //esta propiedad se utiliza para proporcionar la lista de opciones de nombres de Pokemon.
        type: Array, //epecifica que la propiedad 'pokemons' debe ser de tipo arreglo.
        required: true //indica que la propiedad 'pokemons' es obligatoria, lo que significa que debe ser proporcionada cuando se use el componente.
      }
    }
  }
  </script>
  
  <style scoped>
    ul {
      list-style-type: none;
    }
    li {
      background-color: white;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;
      margin-bottom: 10px;
      width: 250px;
    }

    li:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    .options-container {
      display: flex;
      justify-content: center;
    }
  </style>