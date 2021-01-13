import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false,
    activeWor: null,
  },
  mutations: {
    setShowModal(state, bool) {
      state.show = bool;
    },
    setActiveWor(state, worker) {
      state.activeWor = worker;
    },
  },
  actions: {
  },
  modules: {
  },
});
