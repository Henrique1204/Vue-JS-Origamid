<template>
  <div>
    <h1>Bem-vindo aos nossos cursos</h1>

    <nav>
      <router-link :to="{ name: 'curso', params: { curso: 'javascript' } }">JavaScript</router-link>
      <router-link to="/cursos/css">CSS</router-link>
      <router-link to="/cursos/html">HTML</router-link>
    </nav>
  
    <transition mode="out-in">
      <router-view :key="curso"></router-view>
    </transition>
  </div>
</template>

<script>
    export default {
      props: ['curso'],
      beforeRouteUpdate(to, from, next) {
        next();
      },
        beforeRouteLeave(to, from, next) {
            const isSair = confirm('Você deseja sair?');
            if (isSair) next();
        }
    }
</script>

<style>
</style>