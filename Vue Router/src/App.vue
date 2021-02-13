<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cursos">Cursos</router-link>
      <router-link to="/pokemons">Pokemons</router-link>
    </nav>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    padding: 20px;
    border: 4px solid;
    margin: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #234;
  }

  nav {
    padding: 20px 0;
  }

  a {
    padding: 10px;
    text-decoration: none;
    color: inherit;
  }

  .router-link-exact-active {
    font-weight: bold;
    color: #4B8;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
    transform: translate3d(0, -30px, 0) scale(0.2);
  }

  .v-enter-active, .v-leave-active {
    transition: all 0.3s;
  }
</style>
