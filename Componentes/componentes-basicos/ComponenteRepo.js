export default {
    name: 'ComponenteRepo',
    data() {
        return {
            dados: null
        }
    },
    template: `<p>Repositórios: {{dados?.public_repos}}</p>`,
    methods: {
        async fetchDados() {
            const res = await fetch('https://api.github.com/users/henrique1204');
            this.dados = await res.json();
        }
    },
    created() {
        this.fetchDados();
    }
};
