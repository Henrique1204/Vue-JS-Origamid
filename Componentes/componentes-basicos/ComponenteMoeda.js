export default {
    name: 'ComponenteMoeda',
    data() {
        return {
            dados: null
        }
    },
    template: `<p>Moeda: {{dados?.rates.BRL}}</p>`,
    methods: {
        async fetchMoeda() {
            const res = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
            this.dados = await res.json();
        }
    },
    created() {
        this.fetchMoeda();
    }
};
