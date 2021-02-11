import Vue from 'vue';
import App from './App.vue';
import HeaderPrincipal from "./components/HeaderPrincipal.vue";
import MenuPrincipal from "./components/MenuPrincipal.vue";

Vue.component('HeaderPrincipal', HeaderPrincipal);
Vue.component('MenuPrincipal', MenuPrincipal);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
