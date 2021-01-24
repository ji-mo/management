import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false,
    activeWor: null,
    list: [],
    size: 20,
    count: 0,
    totalPage: 0,
    nowPage: 0,
  },
  mutations: {
    setList(state, list) {
      state.list = list;
    },
    setShowModal(state, bool) {
      state.show = bool;
    },
    setActiveWor(state, worker) {
      state.activeWor = worker;
    },
    setTotalPage(state, count) {
      state.count = count;
      state.totalPage = Math.ceil(count / state.size);
    },
    setNowPage(state, page) {
      state.nowPage = page;
    },
  },
  actions: {
    async getWorkList({ state, commit }, page) {
      const { data: { cont: count, findByPage: list } } = await api.findPage(page, state.size);
      commit('setList', list);
      commit('setTotalPage', count);
      commit('setNowPage', page);
    },
    async delWorker({ state, dispatch }, sNo) {
      const value = await api.delWorker(sNo);
      console.log(value);
      let page = Math.ceil((state.count - 1) / state.size);
      if (state.nowPage > page) {
        page = state.nowPage - 1;
      } else {
        page = state.nowPage;
      }
      dispatch('getWorkList', page);
    },
  },
  modules: {
  },
});
