import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Modules
import Users from './modules/Users'

export default new Vuex.Store({
  modules: {
    Users
  }
})
