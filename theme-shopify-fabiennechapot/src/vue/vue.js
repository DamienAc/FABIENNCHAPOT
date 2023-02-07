import Vue from "vue";
import Vuex from 'vuex';
import App from "./App";
import store from './store';
import router from './router';
import { filters } from './filters';

Vue.config.productionTip = false;

Vue.use(Vuex);

// Import filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

document.addEventListener("DOMContentLoaded", function(event){
    const container = document.querySelector('.vue-app');
    if(container) {
        new Vue({
            store,
            router,
            render: h => h(App),
        }).$mount(container);
    }
});
