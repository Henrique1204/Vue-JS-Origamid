import Vue from 'vue';
import Vuex from 'vuex';
import pokemon from './pokemon.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        pokemon
    },
    state: {
        aulasCompletas: [],
        livros: [
            {
                nome: 'O Senhor dos Anéis',
                lido: true
            },
            {
                nome: 'Harry Potter',
                lido: true
            },
            {
                nome: 'As Crônicas de Gelo e Fogo',
                lido: false
            }
        ]
    },
    getters: {
        livrosLidos(state) {
            // Pode ser retornado assim
            // return state.livros.filter(({ lido }) => lido);

            // Ou assim, com argumento
            return (isLido) => state.livros.filter(({ lido }) => lido === isLido);
        }
    },
    mutations: {
        ADICIONAR_AULA_COMPLETADA(state, payload) {
            state.aulasCompletas.push(payload.aula);
        }
    },
    actions: {
        adicionarAulaCompletada(context, payload) {
            context.commit('ADICIONAR_AULA_COMPLETADA', payload);
        }
    }
});
