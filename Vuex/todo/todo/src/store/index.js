import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [
  //   createPersistedState(),
  // ],
  state: {
    todos: [
      {
        title: '첫번째 할일',
        isCompleted: false,
        date: new Date().getTime(),
      },
      {
        title: '두번째 할일',
        isCompleted: false,
        date: new Date().getTime(),
      }
    ]
  },

  getters: {
    completedTodosCount: function (state) {
      return state.todos.filter(todo => {
        return todo.isCompleted === true
      }).length
    },
    uncompletedTodosCount: function (state) {
      return state.todos.filter(todo => {
        return todo.isCompleted !== true
      }).length
    },
    todos: function (state) {
      return state.todos.length
    } 
  },

  mutations: {
    CREATE_TODO: function (state, todoItem) {
      state.todos.push(todoItem)
      console.log(state.todos)
    },
    DELETE_TODO: function (state, todoItem) {
      const idx = state.todos.indexOf(todoItem)
      state.todos.splice(idx, 1)
    },
    UPDATE_TODO_STATUS: function (state, todoItem) {
      state.todos = state.todos.map(todo => {
        if (todo === todoItem) {
          return {
            ...todo,
            isCompleted : !todo.isCompleted
          }
        } else {
          return todo
        }
      })
    }
  },

  actions: {
    createTodo: function ({commit}, todoItem) {
      commit('CREATE_TODO', todoItem)
    },
    deleteTodo: function ({commit}, todoItem) {
      commit('DELETE_TODO', todoItem)
    },
    updateTodoStatus: function ({commit}, todoItem) {
      commit('UPDATE_TODO_STATUS', todoItem)
    }
  },
  modules: {
  }
})
