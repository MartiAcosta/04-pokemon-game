<template>
  <PokemonPage/> <!--Llamo PokemonPage-->
</template>

<script>
import PokemonPage from './pages/PokemonPage.vue' //importo PokemonPage para imprimir todo lo que quiero mostrat en la web

export default {
  name: 'App',
  components: {
    PokemonPage //aca traigo el component PokemonPage con el que vamos a trabajar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
