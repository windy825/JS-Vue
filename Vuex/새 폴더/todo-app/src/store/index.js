import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  // data
    todos: [
      {
        title: '할일 1',
        isCompleted: false,
        date: new Date().getTime(),
      },
      {
        title: '할일 2',
        isCompleted: false,
        date: new Date().getTime(),
      }
    ]
  },
  getters: {  // computed
  },
  mutations: {  //change
  },
  actions: {  //method
  },
  modules: {
  }
})
