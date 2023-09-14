
<template> <!--Definimos la parte visual del componente PokemonPicture-->
    <div class="pokemon-container"> <!-- aca se muestra la img de Pokemon  -->
    <!-- se utiliza imgSrc como fuente de la img  -->
    <img :src="imgSrc"
        class="hidden-pokemon"
        alt="pokemo"> 
    <img v-if="showPokemon"
        :src="imgSrc" 
        class="fade-in"
        alt="pokemo"> 
    </div>    
</template>

<script>
    export default {
        props: { 
            pokemonId: { //esta propiedad espera un numero que representa el ID del pokemon. 
                type: Number, // es de tipo number
                required: true // es obligatoria
            },  
            showPokemon: { // esta propiedad espera un valor booleano que controla la visibilidad de la img del pokemon. 
                type: Boolean, // tipo booleano
                required: true, //es obligatoria
                default: false // por defecta comienza en false
            }
        
        },
        computed:{ //aqui se define una propiedad calculada 
            imgSrc(){ //crea la URL de la img del pokemon basada en el ID del pokemon proporcionado a traves de la propiedad "pokemonID"
                return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
            }
        }
    }
</script>

<style scoped>
    .pokemon-container {
        height: 200px;
    }
    img {
        height: 200px;
        position: absolute;
        width: 100vw;
        margin-left: -48vw;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        }
    .hidden-pokemon {
        filter: brightness(0);
    }
</style>