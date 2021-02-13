<template>
    <div>
        <h2 v-if="loading">Carregando...</h2>
        <h2 v-else>{{nome}}</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: null,
                nome: null
            }
        },
        props: ['id'],
        methods: {
            async fetchPokemon() {
                this.loading = true;
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
                const json = await res.json();

                this.nome = json.name;
                this.loading = false;
            }
        },
        created() {
            this.fetchPokemon(this.id);
        },
        watch: {
            $route: 'fetchPokemon'
        }
        // beforeRouteUpdate(to, from, next) {
        //     this.fetchPokemon();
        //     next();
        // }
    }
</script>

<style>

</style>