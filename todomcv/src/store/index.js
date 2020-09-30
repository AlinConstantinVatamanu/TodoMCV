import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo);
    }/* ,
    deleteTodo (todo) {

    } */
  },

  getters: {},
  actions: {
    addTodoCommit ({ commit }, todo){
      commit('addTodo', todo);
    }    

  },
  modules: {
  }
})
