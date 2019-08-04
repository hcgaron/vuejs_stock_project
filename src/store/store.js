import Vue from 'vue';
import Vuex from 'vuex'; // must import from vuex
import userFunds from './modules/userFunds'

// set up for using Vuex
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
      userFunds: {
          namespaced: true,
          ...userFunds
      }

  }
})