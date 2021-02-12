<template>
    <div>
        <button @click="ativo = true">Abrir</button>
        <transition name="fade">
            <div v-if="ativo" class="modal">
                <h1>Modal</h1>
                <button @click="ativo = false">Fechar</button>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ativo: false
            }
        }
    };
</script>

<style>
    .modal {
        width: 400px;
        height: 200px;
        border-radius: 6px;
        border: 2px solid #000;
        margin: 2rem auto 0;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .fade-enter, .fade-leave-to {
        transform: translate3d(0, -20px, 0);
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: 0.5s;
    }
</style>