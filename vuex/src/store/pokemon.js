export default {
    namespaced: true,
    name: 'pokemon',
    state: {
        pokemon: null
    },
    mutations: {
        ADICIONAR_POKEMON(state, payload) {
            state.pokemon = payload.pokemon;
        }
    },
    actions: {
        async fetchPokemon(context, payload) {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${payload.id}`);
            const pokemon = await res.json();

            context.commit('ADICIONAR_POKEMON', { pokemon });
        }
    }
};
