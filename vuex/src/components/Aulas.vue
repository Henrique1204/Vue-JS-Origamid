<template>
    <div>
        <h2>Aulas</h2>
        <ul v-if="aulas.length > 0">
            <li
                v-for="(aula, index) in aulas"
                :key="`${aula.nome}_${index}`"
            >
                <h3>{{aula.nome}} - {{aula.duracao}} min</h3>
                <button @click='completarAula(index)'>Completar</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'Aula',
        data() {
            return {
                aulas: [
                    { nome: 'HTML e CSS', duracao: 15 },
                    { nome: 'JavaScript', duracao: 30 },
                    { nome: 'UX Design', duracao: 20 }
                ]
            };
        },
        methods: {
            ...mapActions(['adicionarAulaCompletada']),
            completarAula(index) {
                const aula = this.aulas[index];
                this.adicionarAulaCompletada({ aula });
                this.aulas.splice(index, 1);
            }
        }
    }
</script>

<style>

</style>
