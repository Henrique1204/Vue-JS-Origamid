import ComponenteMoeda from './ComponenteMoeda.js';

export default Vue.component('ComponentePokemon', {
    data() {
        return {
            dados: null
        }
    },
    template: (
        `<div>
            <p>Pokemon: {{dados?.name}}</p>
            <componente-moeda></componente-moeda>
        </div>`
    ),
    methods: {
        async fetchDados() {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
            this.dados = await res.json();
        }
    },
    created() {
        this.fetchDados();
    },
    components: {
        ComponenteMoeda
    }
});
