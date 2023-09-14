<!--Este es el componente que se ve en web-->
<!--
    A este componente lo importamos en el componente app dentro de: 
        <script>
        import PokemonPage from './pages/PokemonPage.vue'

        export default {
            name: 'App',
            components: {
                PokemonPage
            }
        }
        </script> 
    El componente app es el que nos va a imprimir lo que queremos mostrar en nuestra    
-->

<template> <!--Aca se define como se ve la parte visual del componente PokemonPag-->

    <h1 v-if="!pokemon">Espere por favor...</h1> <!--aca se utiliza la directiva v-if, si NO hay pokemon "!pokemon" entonces que se imprima Espere por favor... -->
    
    <div v-else class="div-padre"> <!--se utiliza la directiva v-else, si hay pokemon entonces imprimi ¿Quien es este pokemon?-->
        <h1>¿Quien es este pokemon?</h1>
        
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/> <!--Mostramos img abajo del titulo, se pasan dos propiedades, pokemon.id y showPokemon-->
        <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswe"/> <!--Mostramos opciones, se pasa una propiedad que contiene la lista de opciones de nombres de pokemon (pokemonArr) -->
        
        <template v-if="showAnswer" >
            <h2>{{ message }}</h2>
            <button @click="newGame">Nuevo Juego</button>
        </template>
    </div>

</template>

<script>
    //Importamos componente para llamar lo que queremos mostrar
    //El arroba me manda directamente al src que estan todos las carpetas, reempla los ../
    import PokemonOptions from '@/components/PokemonOptions.vue'  //opciones
    import PokemonPicture from '@/components/PokemonPicture.vue' //img
    import getPokemonOptions from '@/helpers/getPokemonOptions.js' //logica

    export default {
        name: 'PokemonPage', //le doy un nombre a mi componente PokemonPage.vue
        components: {PokemonPicture,  PokemonOptions}, //declaro los componente hijos de PokemonPage, esto me permite usarlos en la planilla de PokemonPage
        data() { //data sirve para definir todos los datos que queremos que Vue tenga disponible para mostrarlos en nuestro htm
            return{
                pokemonArr: [], //arreglo que almacena las opciones de nombres de Pokemon
                pokemon: null, // objeto que contiene la info del pokemon seleccionado(ID, NOMBRE)
                showPokemon: false, // booleano que controla si se muestra la info del pokemon en la web
                showAnswer: false,
                message: ''
            }
        },
        methods: { //methods se utiliza para guardar funciones especiales que puedes llamar cuando sucede algo, como cuando alguien hace clic en un botón
            async mixPokemonArray() { //async se utiliza para definir una función asíncrona. Una función asíncrona es aquella que puede contener operaciones que toman tiempo, como esperar a que se complete una solicitud a un servidor o una tarea que tome tiempo en general, mientras permite que otras partes de tu código sigan ejecutándose sin bloquearse.
                //mixPokemonArray () funcion asíncrona que mezcla las opciones de nombres de Pokemon usando la funcion "getPokemonOptions()". Luego seleciona un pokemon aleatorio y lo almacena en la propiedad "pokemon"

                this.pokemonArr = await getPokemonOptions() //await se usa dentro de la funcion para esperar a que la solicitud se complete y se obtenga una respuesta antes de continuar con el codigo
                //this hace referencia al objeto que representa ese componente en particular. Ej: si quiero cambiar el mensaje en una etiqueta de texto cuando alguien hace clic en un botón, deno usar this para decirle al componente qué mensaje mostrar. 
                
                const rndInt = Math.floor( Math.random() * 4) //Math.floor trae numeros aleatorios, el math.random trae numero aleaotorio y lo multiplica por cuatro para que mande numeros del 0 al 3
                this.pokemon = this.pokemonArr[rndInt] 
            },
            checkAnswe (selectedId) {
                this.showPokemon = true
                this.showAnswer = true
                if(selectedId === this.pokemon.id){
                    this.message = `Correcto, ${this.pokemon.name}`
                }else {
                    this.message = `Opps, te equivocaste ${this.pokemon.name}`
                }
            },
            newGame() {// aca recargo el juego al hacer clik en Nuevo juego. Paso todas las props como se inicializa y llamo a la funcion mixPokemonArray() para tener la nueva selccion de los cuatro pokemones
                this.pokemonArr = [],
                this.pokemon = null, // objeto que contiene la info del pokemon seleccionado(ID, NOMBRE)
                this.showPokemon = false, // booleano que controla si se muestra la info del pokemon en la web
                this.showAnswer = false,
                this.message = '',
                this.mixPokemonArray()
            }
        },
        mounted(){// mounted es un gancho de ciclo de vida de Vue. Cuando el componente se monta en la web, se llama al metodo "mixPokemonArray()" para iniciar la mezcla de los nombres de los Pokemon y mostras la parte visible y funcional (interfaz)
            this.mixPokemonArray()
        }
    }
</script>

<style scoped>
    .div-padre{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
