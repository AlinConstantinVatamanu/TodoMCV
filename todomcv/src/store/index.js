import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
    todoId: 0,
    visibility: 'all',
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push({ id: state.todoId++, value: todo, completed: false });
    },
    deleteTodo(state, idToDelete) {
      state.todos = state.todos.filter(todo => todo.id !== +idToDelete);
    },
    changeVisibility(state, newVisibility) {
      state.visibility = newVisibility;
    },
  },

  getters: {
    getAllTodos: state => {
      return state.todos;
    },

    getActiveTodos: state => {
      return state.todos.filter(todo => !todo.completed);
    },

    getCompletedTodos: state => {
      return state.todos.filter(todo => todo.completed);
    }
  },

  actions: {
    addTodoCommit({ commit }, todo) {
      commit('addTodo', todo);
    },
    deleteTodoCommit({ commit }, idToDelete) {
      commit('deleteTodo', idToDelete);
    },
    filterToAll({ commit }, newVisibility) {
      commit('changeVisibility', newVisibility);
    },
    filterToActive({ commit }, newVisibility) {
      commit('changeVisibility', newVisibility);
    },
    filterToComplete({ commit }, newVisibility) {
      commit('changeVisibility', newVisibility);
    },
  },
  modules: {
  }
})
