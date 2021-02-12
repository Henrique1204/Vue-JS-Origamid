<template>
    <transition-group tag="ul">
        <li v-for="({ nome, preco }, i) in carrinho" :key="nome + '_' + i">
            <p>{{nome}}</p>
            <p>{{preco}}</p>
            <button @click="remover(i)">Remover</button>
        </li>
    </transition-group>
</template>

<script>
    export default {
        data() {
            return {
                carrinho: [
                    { nome: 'Notebook', preco: 2399 },
                    { nome: 'Smartphone', preco: 1399 }
                ]
            };
        },
        methods: {
            remover(index) {
                this.carrinho.splice(index, 1);
            }
        }
    }
</script>

<style>
    .v-enter, .v-leave-to {
        opacity: 0;
        transform: translate3d(-20px, 0, 0);
    }

    .v-enter-active, .v-leave-active {
        transition: all 0.3s;
    }
</style>