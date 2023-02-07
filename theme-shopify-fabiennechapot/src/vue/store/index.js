import Vuex from 'vuex';
import Vue from 'vue';

import shops from './modules/shops';
import settings from './modules/settings';
import cart from "./modules/cart";
import users from "./modules/users";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        ...shops.state,
        ...settings.state,
        ...cart.state,
        ...users.state
    },
    mutations: {
        ...shops.mutations,
        ...settings.mutations,
        ...cart.mutations,
        ...users.mutations,
    },
    actions: {
        ...shops.actions,
        ...settings.actions,
        ...cart.actions,
        ...users.actions,
    },
    getters: {
        ...shops.getters,
        ...settings.getters,
        ...cart.getters,
        ...users.getters,
    }
});

global.store = store;

export default store;
