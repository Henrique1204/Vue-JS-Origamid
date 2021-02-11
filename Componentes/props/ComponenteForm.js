import ComponenteMsg from "./ComponenteMsg.js";

export default Vue.component('ComponenteForm', {
    data() {
        return {
            id: '',
            dados: null
        }
    },
    methods: {
        async fetchPokemon() {
            if (this.id) {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
                const json = await res.json();
                this.dados = json.name;
            }
        }
    },
    template: (
        `<form>
            <label for="id">ID Pokémon</label>
            <input name="id" id="id" v-model.number="id" />

            <button @click.prevent="fetchPokemon">Enviar</button>
            <componente-msg v-if="dados" :msg="dados"></componente-msg>
        </form>`
    ),
    components: {
        ComponenteMsg
    }
});
