<template>
  <div>
        <ul>
            <li @click="componenteAtivo = 'PaginaSobre'">Sobre</li>
            <li @click="componenteAtivo = 'PaginaServico'">Serviços</li>
        </ul>

        <transition mode="out-in">
            <component :is="componenteAtivo"></component>
        </transition>
  </div>
</template>

<script>
    import PaginaSobre from './PaginaSobre.vue';
    import PaginaServico from './PaginaServico.vue';

    export default {
        data() {
            return {
                componenteAtivo: 'PaginaSobre'
            };
        },
        components: {
            PaginaSobre,
            PaginaServico
        }
    }
</script>

<style>
    .v-enter, .v-leave-to {
        opacity: 0;
        transform: translate3d(0, -30px, 0);
    }

    .v-enter-active, .v-leave-active {
        transition: all 0.3s;
    }
</style>