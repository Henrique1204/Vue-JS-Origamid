<template>
  <div>
        <button @click="filtrarAZ">A - Z</button>
        <button @click="filtrarZA">Z - A</button>

        <transition-group tag="ul">
            <li v-for="filme in filmes" :key="filme">{{filme}}</li>
        </transition-group>
  </div>
</template>

<script>
export default {
    data() {
        return {
            filmes: ['Os Vingadores', 'Homem de ferro', 'Homem aranha', 'Homem formiga']
        };
    },
    methods: {
        filtrarAZ() {
            this.filmes.sort();
        },
        filtrarZA() {
            this.filmes.sort().reverse();
        }
    }
}
</script>

<style>
    .v-move {
        transition: transform 0.3s;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    li {
        max-width: 200px;
        padding: 10px;
        margin: 20px 0;
        background-color: #FFF;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    }
</style>