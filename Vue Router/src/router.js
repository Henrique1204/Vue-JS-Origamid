import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Cursos from './views/Cursos.vue';
import Curso from './views/Curso.vue';
import DescricaoCurso from './views/DescricaoCurso.vue';
import AulasCurso from './views/AulasCurso.vue';
import Pokemons from './views/Pokemons.vue';
import Pokemon from './views/Pokemon.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/cursos',
            component: Cursos,
            props: true,
            beforeEnter: (to, from, next) => {
                console.log("Foi para cursos");
                next();
            },
            children: [
                {
                    name: 'curso',
                    path: ':curso',
                    component: Curso,
                    props: true,
                    children: [
                        {
                            name: 'descricao',
                            path: 'descricao',
                            component: DescricaoCurso
                        },
                        {
                            name: 'aulas',
                            path: 'aulas',
                            component: AulasCurso
                        }
                    ]
                }
            ]
        },
        {
            path: '/pokemons',
            component: Pokemons,
            props: true,
            children: [
                {
                    path: ':id',
                    component: Pokemon,
                    props: true
                }
            ]
        }
    ]
});
