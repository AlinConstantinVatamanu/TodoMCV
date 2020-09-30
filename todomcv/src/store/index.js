import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    addTodo (todo) {
      this.state.todos.push(todo);
      console.log(this.state.todos);
    }/* ,
    deleteTodo (todo) {

    } */
  },

  /* getters: {
    getTodoList () {
      //console.log(this.state.todos);
      return this.state.todos;
    }
  }, */

  actions: {
    addTodoCommit ({ commit }, todo){
      commit('addTodo', todo);
    }    

  },
  modules: {
  }
})
