<template>
  <nav>
    <ul>
        <li @click="pagina = 'SobreEmpresa'">sobre</li>
        <li @click="pagina = 'ServicoEmpresa'">Seriços</li>
        <li @click="pagina = 'ContatoEmpresa'">Contato</li>
    </ul>

    <keep-alive>
        <component :is="pagina"></component>
    </keep-alive>
  </nav>
</template>

<script>
    import SobreEmpresa from "./SobreEmpresa.vue";
    import ServicoEmpresa from "./ServicoEmpresa.vue";
    import ContatoEmpresa from "./ContatoEmpresa.vue";

    export default {
        name: 'MenuPrincipal',
        data() {
            return {
                pagina: 'SobreEmpresa'
            }
        },
        components: {
            SobreEmpresa,
            ServicoEmpresa,
            ContatoEmpresa
        }
    }
</script>

<style>

</style>