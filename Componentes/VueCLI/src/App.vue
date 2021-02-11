<template>
  <div>
    <HeaderPrincipal>
      <template v-slot:menu>
        <MenuPrincipal />
      </template>
    </HeaderPrincipal>

    <p>{{mensagem}}</p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        mensagem: 'Está é uma mensagem do Vue.',
        aula: 'AulaDownload'
      }
    }
  }
</script>

<style>
</style>
