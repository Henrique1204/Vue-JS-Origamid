<template>
  <div>
      <h1>Aluno</h1>
      <ul v-if="aulasCompletas.length > 0">
        <li
          v-for="({ nome, duracao }, index) in aulasCompletas"
          :key="`${nome}_${index}`"
        >
          <h3>{{nome}} - {{duracao}} min</h3>
        </li>
      </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'Aluno',
    computed: {
      ...mapState(['aulasCompletas'])
    }
  };
</script>

<style>

</style>
