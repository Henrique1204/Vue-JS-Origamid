<template>
  <div id="app">
    <Aluno />
    <Curso />

    <pre v-if="pokemon">Pokemon: {{pokemon}}</pre>

    <ul v-if="livrosLidos">
      <li
        v-for="({ nome }, index) in livrosLidos(false)"
        :key="`${nome}_${index}`"
      >
        {{nome}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Aluno from '@/components/Aluno.vue';
  import Curso from '@/components/Curso.vue';
  import { mapState, mapGetters } from 'vuex';

  export default {
    name: 'App',
    components: {
      Aluno,
      Curso
    },
    computed: {
      ...mapState(['pokemon']),
      ...mapGetters(['livrosLidos'])
    },
    created() {
      this.$store.dispatch("pokemon/fetchPokemon", { id: 1 });
    }
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
