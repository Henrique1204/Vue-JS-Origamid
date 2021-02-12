<template>
    <div>
        <button @click="estoque++">Adicionar Estoque</button>
        <button @click="estoque = 0">Deletar Estoque</button>
        <transition mode="out-in">
            <p v-if="estoque > 0" :key="estoque">Itens em estoque</p>
            <p v-else :key="esgotado">Produto fora de estoque</p>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                estoque: 0
            };
        }
    }
</script>

<style>
    .v-enter, .v-leave-to {
        opacity: 0;
    }

    .v-enter-active, .v-leave-active {
        transition: opacity 0.3s;
    }
</style>