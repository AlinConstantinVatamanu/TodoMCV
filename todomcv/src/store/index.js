import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
    todoId: 0,
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({ id: state.todoId++, value: todo, completed: false });
    },
    deleteTodo(state, idToDelete) {
      state.todos = state.todos.filter(todo => todo.id !== +idToDelete);
    },
  },

  getters: {},
  actions: {
    addTodoCommit({ commit }, todo) {
      commit('addTodo', todo);
    },
    deleteTodoCommit({ commit }, idToDelete) {
      commit('deleteTodo', idToDelete);
    },

  },
  modules: {
  }
})
