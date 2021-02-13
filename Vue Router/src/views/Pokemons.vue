<template>
  <div>
    <h1>Pokemons</h1>

    <nav>
        <router-link to="/pokemons/1">Bulbasauro</router-link>
        <router-link to="/pokemons/4">Charmander</router-link>
        <router-link to="/pokemons/7">Squirtle</router-link>
    </nav>
  
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        props: ['id']
    }
</script>

<style>

</style>